(function (window) {
    'use strict';

    const HOST = window.location.host;
    const URL = `http://127.0.0.1:2095/products`;

    angular.module('shop')
        .factory('ProductsService', function ($http) {
            return {
                $get(options) {
                    const page = (options && options.page) || 1;
                    return $http.get(URL, {
                        params: {
                            _page: page,
                            _limit: 6
                        }
                    });
                },
                getByName(name, options) {
                    const page = (options && options.page) || 1;
                    return $http.get(URL, {
                        params: {
                            name_like: name,
                            _page: page,
                            _limit: 6
                        }
                    });
                }
            };
        })
}(window));
