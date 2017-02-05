(function() {
  'use strict';

  class CheckoutComponent {
    constructor(CartService) {
      this.CartService = CartService;
    }

    $onInit() {
      this._update();
    }

    remove(product) {
      this.CartService.remove(product);
      this._update();
    }

    _update() {
      this.cart = this.CartService.getCart()
        .map(item => {
          item.product.totalItemPrice = parseFloat(item.product.price) * item.quantity;
          return item;
        });

      this.totalPrice = this.cart.reduce((sum, item) => sum + parseFloat(item.product.price), 0);
    }
  }

  angular.module('shop')
    .component('checkout', {
      template: `
        <div class="order-summary" ng-if="$ctrl.cart.length">
          <table>
            <thead>
              <tr>
                  <th>Nazwa</th>
                  <th>Ilość</th>
                  <th>Cena</th>
                  <th>Razem</th>
                  <th>Usuń</th>
              </tr>
            </thead>

            <tbody>
              <tr ng-repeat="item in $ctrl.cart track by item.product.id">
                <td>{{::item.product.name}}</td>
                <td>{{::item.quantity}}</td>
                <td>{{::item.product.price | plnCurrency}}</td>
                <td>{{::item.product.totalItemPrice | plnCurrency}}</td>
                <td>
                  <a class="col s1" href="" ng-click="$ctrl.remove(item.product)">
                    <i class="material-icons">delete</i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <br />

          <h5 class="order-summary__total">Razem: {{$ctrl.totalPrice | plnCurrency}}</h5>

          <div class="order-summary__pay-btn-container">
            <a class="waves-effect waves-light btn">Zapłać</a>
          </div>
        </div>

        <p class="checkout__no-data" ng-if="!$ctrl.cart.length">Brak produktów w koszyku</p>
      `,
      controller: CheckoutComponent
    });
}());
