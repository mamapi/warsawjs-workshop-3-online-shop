(function () {
    'use strict';

    class ProductSearchController {
        onSubmit() {
            this.onQueryUpdate({
                $event: {
                    query: this.query
                }
            });
        }

        clearSearch() {
            this.query = '';

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
                        <form ng-submit="$ctrl.onSubmit()">
                            <div class="input-field">
                                <input id="search"
                                       type="search"
                                       placeholder="Wpisz nazwę produktu..."
                                       ng-model="$ctrl.query" />
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
                onQueryUpdate: '&'
            },
            controller: ProductSearchController
        })
}());