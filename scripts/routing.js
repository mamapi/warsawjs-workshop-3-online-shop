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
          url: '/products/:page?name',
          views: {
            content: {
              template: `
                <products></products>
              `
            }
          }
        })
        .state({
          parent: 'root',
          name: 'checkout',
          url: '/checkout',
          views: {
            content: {
              template: '<checkout></checkout>'
            }
          }
        });

      $urlRouterProvider.otherwise('/products/1');
    });
}());
