(function () {
    'use strict';

    class ProductListComponentController {
        constructor($stateParams, ProductsService) {
            this.currentPage = parseInt($stateParams.page, 10);
            this.ProductsService = ProductsService;
            this.PRODUCTS_PER_PAGE = 6;
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

        _processProducts({ data, headers}) {
            this.products = data;
            this.totalProducts = parseInt(headers('X-Total-Count'), 10);
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

                <pagination
                    total-items="$ctrl.totalProducts"
                    items-per-page="$ctrl.PRODUCTS_PER_PAGE"
                    state-name="products">
                </pagination>

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
