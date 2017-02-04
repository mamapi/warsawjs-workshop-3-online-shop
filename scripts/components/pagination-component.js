(function() {
  'use strict';

  class PaginationComponentController {
    constructor($stateParams, ProductsService) {
      this.$stateParams = $stateParams;
    }

    $onInit() {
      this.currentPage = parseInt(this.$stateParams.page, 10);
      this.pagesIterable = this._range(this.pagesNum);
    }

    $onChanges(changes) {
      if (changes.totalItems && changes.totalItems.currentValue) {
        this.pagesNum = Math.ceil(changes.totalItems.currentValue / this.itemsPerPage);
        this.pagesIterable = this._range(this.pagesNum);
      }

      if (changes.queryParams &&
        !changes.queryParams.isFirstChange() &&
        changes.queryParams.currentValue) {
        this.currentPage = 1;
      }
    }

    getParams(pageParams) {
      return Object.assign({}, this.queryParams, pageParams);
    }

    _range(num) {
      return [...Array(num)].map((e, index) => index + 1);
    }
  }

  angular.module('shop')
    .component('pagination', {
      template: `
        <ul class="center-align pagination" ng-if="$ctrl.pagesNum > 1">
            <li ng-class="{disabled: $ctrl.currentPage == 1}" class="waves-effect">
                <a ui-sref="{{::$ctrl.stateName}}($ctrl.getParams({page: $ctrl.currentPage - 1}))">
                    <i class="material-icons">chevron_left</i>
                </a>
            </li>

            <li ng-class="{active: $ctrl.currentPage == page}"
                ng-repeat="page in $ctrl.pagesIterable track by $index">
                <a ui-sref="{{::$ctrl.stateName}}($ctrl.getParams({page: page}))">
                    {{page}}
                </a>
            </li>
            
            <li ng-class="{disabled: $ctrl.currentPage == $ctrl.pagesNum}" class="waves-effect">
                <a ui-sref="{{::$ctrl.stateName}}($ctrl.getParams({page: $ctrl.currentPage + 1}))">
                    <i class="material-icons">chevron_right</i>
                </a>
            </li>
        </ul>
      `,
      controller: PaginationComponentController,
      bindings: {
        totalItems: '<',
        itemsPerPage: '<',
        stateName: '@',
        queryParams: '<'
      }
    });
}());
