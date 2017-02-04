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

        <div class="col s4" ng-repeat="product in $ctrl.products | filter : {name: $ctrl.nameFilter} track by product.id">
          <product class="row" data="product"></product>
        </div>
      `,
      controller: ProductListComponentController
    });
}());
