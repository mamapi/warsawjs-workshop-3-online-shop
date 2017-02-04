(function () {
    'use strict';

    class AppComponentController {
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
        .component('app', {
            template: `
                <section class="container">
                    <page-header query="$ctrl.query" on-query-update="$ctrl.setQuery($event)"></page-header>

                    <product-list class="row" query="$ctrl.query">
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                    </product-list>

                    <page-footer></page-footer>
                </section>
            `,
            controller: AppComponentController
        })
}());