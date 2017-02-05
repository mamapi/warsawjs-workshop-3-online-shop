# warsawjs-workshop-3-online-shop

> Aplikacja testowa stworzona na potrzeby WarsawJS Workshop #3

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Krok po kroku

* step-1 Instalacja i szkielet aplikacji
* step-2 Pierwsze komponenty: header i footer
* step-3 Serwis produktów

Stwórz serwis o nazwie `ProductsService` w pliku `scripts/services/products-service.js`

API serwisu `ProductsService`:

* metoda `$get()`, która przyjmuje opcjonalnie obiekt o kluczach `page` lub `name`.
* metoda `$get()` pozwala na pobranie wszystkich produktów, listy produktów z danego zakresu (page) lub produktów przefiltrowanych po nazwie.

Przydatne stałe:

```
const HOST_NAME = window.location.hostname;
const PORT = 2095
const URL = `http://${HOST_NAME}:${PORT}/products`;
const PRODUCTS_PER_PAGE = 6;
```

Do instancji serwisu można dostać się z konsoli w narzędziach deweloperskich Google Chrome:

`angular.element(document.body).injector().get('ProductsService').$get().then(data => console.log(data))`

## Jak uruchomić?

```
$ npm install
$ npm run build:mock
$ npm run start:mock-server
$ http-server
```

## Wymagania

* Angular v1.6.1
* Zainstalowany Node.js v7+
* Paczki zainstalowane globalnie:
    - `http-server`
    - `eslint`

## Edytor

Zalecane programy to *Webstorm* lub *Visual Studio Code*.

Polecane wtyczki do *Visual Studio Code*:

* ESlint
* beautify

### Mockowanie danych

* http://json-schema-faker.js.org/
* https://github.com/json-schema-faker/json-schema-faker/
* http://chancejs.com/
* https://github.com/marak/Faker.js/
