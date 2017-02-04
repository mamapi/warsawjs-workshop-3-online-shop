(function (window) {
    'use strict';

    const HOST_NAME = window.location.hostname;
    const PORT = 2095
    const URL = `http://${HOST_NAME}:${PORT}/products`;

    class ProductsService {
        constructor($http) {
            this.$http = $http;
        }

        $get(options) {
            const page = (options && options.page) || 1;
            return this.$http.get(URL, {
                params: {
                    _page: page,
                    _limit: 6
                }
            });
        }

        getByName(name, options) {
            const page = (options && options.page) || 1;
            return this.$http.get(URL, {
                params: {
                    name_like: name,
                    _page: page,
                    _limit: 6
                }
            });
        }
    }

    angular.module('shop')
        .service('ProductsService', ProductsService);
}(window));
