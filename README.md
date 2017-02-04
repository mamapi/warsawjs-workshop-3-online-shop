# warsawjs-workshop-3-shop-online

> Aplikacja testowa stworzona na potrzeby WarsawJS Workshop #3

![](http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png)

## Krok po kroku

* step-1 Instalacja i szkielet aplikacji
* step-2 Pierwsze komponenty: header i footer
* step-3 Serwis produktów
* step-4 Komponent porduktów
* step-5 Komponenty listy produktów i produktu
* step-6 Filtr do wyświetlania waluty

    - Dodanie filtru o nazwie `plnCurrency` w `scripts/filters/pln-currency-filter`.
    - filtr na weściu przyjmuje liczbę całkowitą lub zmiennoprzecinkową lub string z liczbą.
    - na wyjściu filtr zwraca string z liczbą w formacie: `"19,00 PLN"`.
    - wykorzystanie filtru do formatowania ceny w komponencie `product`.

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
