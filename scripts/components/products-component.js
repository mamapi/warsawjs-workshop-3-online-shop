(function () {
    'use strict';

    class ProductsComponentController {
        constructor($stateParams) {
            this.$stateParams = $stateParams;
        }

        $onInit() {
            this.query = this.$stateParams.name || '';
        }

        setQuery($event) {
            this.query = $event.query;
        }
    }

    angular.module('shop')
        .component('products', {
            template: `
                <product-search
                    query="$ctrl.query"
                    on-query-update="$ctrl.setQuery($event)">
                </product-search>

                <product-list class="row" query="$ctrl.query">
                    <div class="progress">
                        <div class="indeterminate"></div>
                    </div>
                </product-list>
            `,
            controller: ProductsComponentController
        })
}());