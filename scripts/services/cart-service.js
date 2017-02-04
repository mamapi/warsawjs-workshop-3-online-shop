(function() {
  'use strict';

  const STORAGE_KEY_NAME = 'cart';
  const EVENTS = {
    CART_UPDATE: 'cart:update'
  };

  class CartService {
    constructor(StorageService, EventHubService) {
      this.eventHub = EventHubService;
      this.storage = StorageService;
      this.cart = this.storage.read(STORAGE_KEY_NAME);
    }

    getCart() {
      return this.cart;
    }

    getCartSize() {
      return this.cart.length;
    }

    add(product, quantity) {
      quantity = parseInt(quantity, 10);

      let results = this.cart.find((item) => {
        return item.product.id === product.id
      });

      if (results) {
        results.quantity += quantity;
      } else {
        this.cart.push({
          quantity,
          product
        });
      }

      this._update();
    }

    remove(product) {
      this.cart = this.cart.filter(item => {
        return item.product.id !== product.id;
      });

      this._update();
    }

    onUpdate(callback) {
      this.eventHub.on(EVENTS.CART_UPDATE, callback);
    }

    clearCart() {
      this.cart = [];
      this._update();
    }

    _save() {
      this.storage.save(this.cart);
    }

    _update() {
      this.eventHub.emit(EVENTS.CART_UPDATE, this.cart);
      this.storage.save(STORAGE_KEY_NAME, this.cart);
    }
  }

  angular.module('shop')
    .service('CartService', CartService);
}());
