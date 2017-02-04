(function () {
    'use strict';

    class CartDropdownController {
        constructor(CartService) {
            this.CartService = CartService;
        }

        $onInit() {
            this.cart = this.CartService.getCart();

            this.CartService.onUpdate(cart => {
                this.cart = cart;
            });
        }

        getCartSize() {
            return this.CartService.getCartSize();
        }

        clearCart() {
            return this.CartService.clearCart();
        }
    }

    angular.module('shop')
        .component('cartDropdown', {
            template: `
                <ul class="right">
                    <li>
                        <a class="dropdown-button" href="">
                            Koszyk ({{ $ctrl.getCartSize() }})
                            <i class="material-icons right">arrow_drop_down</i>
                        </a>
                                
                        <ul id="cart-dropdown-list" class="dropdown-content">
                            <li ng-repeat="item in $ctrl.cart">
                                <a href="">
                                    {{ item.product.name }}
                                    <span class="badge right">
                                        {{ item.quantity }}x
                                    </span>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="" ng-click="$ctrl.clearCart()">Wyczyść koszyk</a>
                            </li>
                            <li>
                                <a ui-sref="checkout">Kasa</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            `,
            controller: CartDropdownController
        })
}());
