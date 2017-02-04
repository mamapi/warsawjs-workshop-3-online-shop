(function() {
  'use strict';

  class ProductListComponentController {
    constructor($stateParams, ProductsService) {
      this.$stateParams = $stateParams;
      this.ProductsService = ProductsService;
    }

    $onInit() {
      this.ProductsService.$get({
        name: this.$stateParams.name
      })
        .then(data => this._processProducts(data));
    }

    $onChanges(changes) {
      if (changes.query && !changes.query.isFirstChange()) {
        this.ProductsService.$get({
          name: changes.query.currentValue
        })
          .then(data => this._processProducts(data));
      }
    }

    _processProducts({ data, headers }) {
      this.products = data;
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

        <div class="col s4" ng-repeat="product in $ctrl.products | filter : {name: $ctrl.nameFilter} track by product.id">
            <product class="row" data="product"></product>
        </div>
      `,
      controller: ProductListComponentController,
      bindings: {
        query: '<'
      }
    });
}());
