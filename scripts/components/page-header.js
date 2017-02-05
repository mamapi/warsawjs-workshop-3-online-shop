(function() {
  'use strict';

  angular.module('shop')
    .component('pageHeader', {
      template: `
        <header>
          <nav class="blue lighten-3">
            <div class="nav-wrapper">
              <a ui-sref="products({page: 1})" class="brand-logo">Sklep internetowy</a>
              <cart-dropdown></cart-dropdown>
            </div>
          </nav>
        </header>
      `
    });
}());
