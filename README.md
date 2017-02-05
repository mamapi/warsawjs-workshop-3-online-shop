# warsawjs-workshop-3-online-shop

> Aplikacja testowa stworzona na potrzeby WarsawJS Workshop #3

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Krok po kroku

* step-1 Instalacja i szkielet aplikacji
* step-2 Pierwsze komponenty: header i footer
* step-3 Serwis produktów
* step-4 Komponent porduktów
* step-5 Komponenty listy produktów i produktu
* step-6 Filtr do wyświetlania waluty
* step-7 Filtrowanie listy produktów po nazwie
* step-8 Serwis do obsługi local storage
* step-9 Serwis do komunikacji za pomocą zdarzeń
* step-10 Serwis do obsługi koszyka
* step-11 Komponent koszyka

    - utworzyć komponent `cartDropdown` w `scripts/components/cart-dropdown-component.js`
    - wyświetla ilość elementów w koszyku
    - w rozwinięciu wyświetla listę produktów w koszku oraz ilością zamówionych sztuk danego produktu
    - w rozwinięciu wyświetla odnośnik do czyszczenia koszyka
    - zaktualizować komponent `pageHeader`

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
