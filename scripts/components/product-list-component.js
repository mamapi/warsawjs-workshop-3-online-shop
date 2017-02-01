(function () {
    'use strict';

    const PRODUCTS_PER_PAGE = 6;

    class ProductListComponentController {
        constructor($stateParams, ProductsService) {
            this.currentPage = parseInt($stateParams.page, 10);
            this.ProductsService = ProductsService;
        }

        $onInit() {
            this.ProductsService.$get({page: this.currentPage})
                .then(data => this._processProducts(data));
        }


        $onChanges(changes) {
            if (changes.query && !changes.query.isFirstChange()) {
                let productsPromise;

                if (changes.query.currentValue) {
                    productsPromise = this.ProductsService.getByName(changes.query.currentValue);
                } else {
                    productsPromise = this.ProductsService.$get();
                }

                productsPromise.then(data => this._processProducts(data));
            }
        }

        getProductByIndex(index) {
            return this.products.find(p => p.id === index);
        }

        range(num) {
            return [...Array(num)].map((e, index) => index + 1);
        }

        _processProducts({ data, headers}) {
            this.products = data;
            this.totalProducts = headers('X-Total-Count');
            this.totalProductPages = this.range(Math.round(this.totalProducts / PRODUCTS_PER_PAGE));
        }
    }

    angular.module('shop')
        .component('productList', {
            template: () => `
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6 offset-s6">
                            <input id="product-name"
                                type="text"
                                placeholder="Filtruj po nazwie"
                                ng-model="$ctrl.nameFilter" />
                        </div>
                    </div>
                </form>

                <ul class="center-align pagination" ng-if="$ctrl.totalProductPages.length > ${PRODUCTS_PER_PAGE}">
                    <li ng-class="{disabled: $ctrl.currentPage == 1}" class="waves-effect">
                        <a ui-sref="products({page: $ctrl.currentPage - 1})">
                            <i class="material-icons">chevron_left</i>
                        </a>
                    </li>

                    <li ng-class="{active: $ctrl.currentPage == page}" ng-repeat="page in $ctrl.totalProductPages track by $index">
                        <a ui-sref="products({page: page})">{{page}}</a>
                    </li>
                    
                    <li ng-class="{disabled: $ctrl.currentPage == $ctrl.totalProductPages.length}" class="waves-effect">
                        <a ui-sref="products({page: $ctrl.currentPage + 1})">
                            <i class="material-icons">chevron_right</i>
                        </a>
                    </li>
                </ul>

                <div class="col s4" ng-repeat="product in $ctrl.products | filter : {name: $ctrl.nameFilter} track by product.id">
                    <product class="row" data-product-index="product.id"></product>
                </div>
            `,
            controller: ProductListComponentController,
            bindings: {
                query: '<'
            }
        });
}());
