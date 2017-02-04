(function() {
  'use strict';

  angular.module('shop')
    .config(function($stateProvider) {
      $stateProvider
        .state({
          name: 'root',
          url: '',
          template: '<app></app>'
        });
    });
}());
