(function() {
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
  }

  angular.module('shop')
    .component('productList', {
      template: `
        <div class="col s4" ng-repeat="product in $ctrl.products track by product.id">
          <product class="row" data="product"></product>
        </div>
      `,
      controller: ProductListComponentController
    });
}());
