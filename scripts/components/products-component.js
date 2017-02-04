(function() {
  'use strict';

  angular.module('shop')
    .component('products', {
      template: `
          <product-list class="row">
              <div class="progress">
                  <div class="indeterminate"></div>
              </div>
          </product-list>
      `
    });
}());
