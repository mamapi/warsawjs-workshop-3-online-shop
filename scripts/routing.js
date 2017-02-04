(function() {
  'use strict';

  angular.module('shop')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state({
          name: 'root',
          abstract: true,
          template: '<app></app>'
        })
        .state({
          parent: 'root',
          name: 'products',
          url: '/products?name',
          views: {
            content: {
              template: `
                <products></products>
              `
            }
          }
        });

      $urlRouterProvider.otherwise('/products');
    });
}());
