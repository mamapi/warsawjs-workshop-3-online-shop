(function () {
    'use strict';

    class PageHeaderComponent {
        onQueryUpdate($event) {
            this.setQuery({ $event });
        }
    }
    angular.module('shop')
        .component('pageHeader', {
            template: `
                <header>
                    <nav class="blue lighten-3">
                        <div class="nav-wrapper">
                            <a class="brand-logo">Sklep internetowy</a>
        
                            <cart-dropdown></cart-dropdown>
                        </div>
                    </nav>
        
                    <product-search
                        query="$ctrl.query"
                        on-query-update="$ctrl.onQueryUpdate($event)">
                    </product-search>
                </header>
            `,
            bindings: {
                query: '<',
                setQuery: '&onQueryUpdate'
            },
            controller: PageHeaderComponent
        });
}());
