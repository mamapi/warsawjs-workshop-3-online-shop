(function () {
    'use strict';

    angular.module('shop')
        .filter('plnCurrency', function () {
            return function (input) {
                return input.replace('.', ',') + ' PLN';
            };
        });
}());