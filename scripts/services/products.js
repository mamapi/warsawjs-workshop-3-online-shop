(function (window) {
    'use strict';

    const HOST_NAME = window.location.hostname;
    const PORT = 2095
    const URL = `http://${HOST_NAME}:${PORT}/products`;
    const PRODUCTS_PER_PAGE = 6;

    class ProductsService {
        constructor($http) {
            this.$http = $http;
        }

        $get({ page, name }) {
            // const page = (options && options.page) || 1;

            let params = {};

            if (page) {
                params._page = page;
                params._limit = PRODUCTS_PER_PAGE;
            }

            if (name) {
                params.name_like = name;
            }
            
            return this.$http.get(URL, { params });
        }

        getByName(name, options) {
            const page = (options && options.page) || 1;
            return this.$http.get(URL, {
                params: {
                    name_like: name,
                    _page: page,
                    _limit: PRODUCTS_PER_PAGE
                }
            });
        }
    }

    angular.module('shop')
        .service('ProductsService', ProductsService);
}(window));
