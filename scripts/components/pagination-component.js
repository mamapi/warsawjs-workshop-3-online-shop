(function () {
    'use strict';

    class PaginationComponentController {
        constructor($state, $stateParams, ProductsService) {
            this.currentPage = parseInt($stateParams.page, 10);
        }

        $onInit() {
          this.pagesIterable = this.range(this.pagesNum);
        }

        $onChanges(changes) {
            if (changes.totalItems.currentValue) {
                this.pagesNum = Math.round(changes.totalItems.currentValue / this.itemsPerPage);
                this.pagesIterable = this.range(this.pagesNum);
            }
        }

        range(num) {
            return [...Array(num)].map((e, index) => index + 1);
        }
    }

    angular.module('shop')
      .component('pagination', {
            template: `
                <ul class="center-align pagination" ng-if="$ctrl.pagesNum > 1">
                    <li ng-class="{disabled: $ctrl.currentPage == 1}" class="waves-effect">
                        <a ui-sref="{{::$ctrl.stateName}}({page: $ctrl.currentPage - 1})">
                            <i class="material-icons">chevron_left</i>
                        </a>
                    </li>

                    <li ng-class="{active: $ctrl.currentPage == page}"
                        ng-repeat="page in $ctrl.pagesIterable track by $index">
                        <a ui-sref="{{::$ctrl.stateName}}({page: page})">
                            {{page}}
                        </a>
                    </li>
                    
                    <li ng-class="{disabled: $ctrl.currentPage == $ctrl.pagesNum}" class="waves-effect">
                        <a ui-sref="{{::$ctrl.stateName}}({page: $ctrl.currentPage + 1})">
                            <i class="material-icons">chevron_right</i>
                        </a>
                    </li>
                </ul>
            `,
            controller: PaginationComponentController,
            bindings: {
                totalItems: '<',
                itemsPerPage: '<',
                stateName: '@'
            }
        });
}());
