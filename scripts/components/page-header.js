(function() {
  'use strict';

  angular.module('shop')
    .component('pageHeader', {
      template: `
        <header>
          <nav class="blue lighten-3">
            <div class="nav-wrapper">
              <a class="brand-logo">Sklep internetowy</a>
            </div>
          </nav>
        </header>
      `
    });
}());
