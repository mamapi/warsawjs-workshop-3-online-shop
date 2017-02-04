(function () {
    'use strict';

    class ProductSearchController {
        constructor($state, $stateParams) {
            this.$state = $state;
            this.$stateParams = $stateParams;
        }

        clearSearch() {
            this.query = '';
            this.onChange();
        }

        onChange() {
            this.$state.go('.', { page: 1, name: this.query }, { notify: false });

            this.onQueryUpdate({
                $event: {
                    query: this.query
                }
            });
        }
    }

    angular.module('shop')
        .component('productSearch', {
            template: `
                <nav class="blue lighten-1">
                    <div class="nav-wrapper">
                        <form>
                            <div class="input-field">
                                <input id="search"
                                       type="search"
                                       placeholder="Wpisz nazwę produktu..."
                                       ng-model="$ctrl.query"
                                       ng-change="$ctrl.onChange()"
                                       ng-model-options="{debounce: 500}" />
                                <label for="search">
                                    <i class="material-icons">search</i>
                                </label>
                                <i class="material-icons" ng-click="$ctrl.clearSearch()">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
            `,
            bindings: {
                query: '<',
                onQueryUpdate: '&'
            },
            controller: ProductSearchController
        })
}());