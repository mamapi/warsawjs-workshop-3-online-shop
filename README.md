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
* step-7 Filtrowanie listy produktów po nazwie
* step-8 Serwis do obsługi local storage
* step-9 Serwis do komunikacji za pomocą zdarzeń
* step-10 Serwis do obsługi koszyka
* step-11 Komponent koszyka
* step-12 Dodawanie produktu do koszyka
* step-13 Wyszukiwarka produktów
* step-14 Stronicowanie produktów
* step-15 Kasa

    - dodać komponent `checkout` w `scripts/components/checkout-component.js`;
    - wykorzystać serwis `CartService` do pobrania zawartości koszyka;
    - komponent powinien wyświetlać podsumowanie zamówienia zawierające:
        + nazwę produktu,
        + ilość ilość zamówionego produktu,
        + cenę jednej sztuki produktu,
        + cenę wszystkich sztuk produktu,
        + przycisk umożliwiający usunięcie produktu z koszyka,
        + całkowitą wartość zamówienia
    - dodać w routingu stan prowadzący do kasy;
    - w komponencie `pageHeader` dodać link umożliwiający powrót do listy produktuów;

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
