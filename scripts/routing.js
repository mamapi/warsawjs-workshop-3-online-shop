(function () {
    'use strict';

    angular.module('shop')
        .config(function ($compileProvider, $stateProvider) {
            // $compileProvider.debugInfoEnabled(false);

            $stateProvider
                .state({
                    name: 'home',
                    url: '',
                    template: '<app></app>'
                })
                .state({
                    name: 'products',
                    url: '/products/:page',
                    template: '<app></app>'
                })
        });
}());
