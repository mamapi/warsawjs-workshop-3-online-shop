(function (window) {
    'use strict';

    const HOST = window.location.host;
    const URL = `http://127.0.0.1:2095/products`;

    angular.module('shop')
        .factory('ProductsService', function ($http) {
            return {
                $get() {
                    return $http.get(URL);
                },
                getByName(name) {
                    return $http.get(URL, {params: {name_like: name}});
                }
            };
        })
}(window));
