(function() {
  'use strict';

  angular.module('shop')
    .component('app', {
      template: `
        <section class="container">
          <page-header></page-header>

          <h1>App</h1>

          <page-footer></page-footer>
        </section>
      `
    })
}());
