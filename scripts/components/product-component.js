(function() {
  'use strict';

  angular.module('shop')
    .component('product', {
      template: `
        <div class="card small blue-grey darken-1">
            <div class="card-content white-text">
                <h6 class="card-title">{{ $ctrl.data.name }}</h6>
                <p>{{ $ctrl.data.description }}</p>
                <h5 class="product-price">Cena: {{ $ctrl.data.price | plnCurrency }}</h5>
            </div>
            <div class="card-action">
                <product-add-to-cart></product-add-to-cart>
            </div>
        </div>
      `,
      bindings: {
        data: '<'
      },
      require: {
        productList: '^^'
      }
    });
}());
