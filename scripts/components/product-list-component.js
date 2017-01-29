(function () {
    'use strict';

    class ProductListComponentController {
        constructor(ProductsService) {
            this.ProductsService = ProductsService;
        }

        $onInit() {
            this.ProductsService.$get()
                .then(({ data }) => {
                    this.products = data;
                });
        }

        getProductByIndex(index) {
            return this.products.find(p => p.id === index);
        }
    }

    angular.module('shop')
        .component('productList', {
            template: () => `
                <div class="col s4" ng-repeat="product in $ctrl.products | filter : {name: $ctrl.query} track by product.id">
                    <product class="row" data-product-index="product.id"></product>
                </div>
            `,
            controller: ProductListComponentController,
            bindings: {
                query: '<'
            }
        });
}());
