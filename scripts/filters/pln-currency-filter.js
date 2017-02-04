(function () {
    'use strict';

    angular.module('shop')
        .filter('plnCurrency', function () {
            return function (input) {
                if (!angular.isString(input)) {
                    input = '' + input;
                }

                if (input.indexOf('.') === -1) {
                    input += '.00';
                }

                return input.replace('.', ',') + ' PLN';
            };
        });
}());