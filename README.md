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

    - serwis korzysta z serwisu `StorageService` oraz `EventHubService`
    - utworzyć serwis o nazwie `CartService` w `scripts/services/cart-service.js` o API:
        + metoda `getCart()` - zwraca całą zawartość koszyka
        + metoda `getCartSize()` - zwraca liczbę elementów w koszyku
        + metoda `add(product, quantity)` - dodawanie produktu do koszyka
        + metoda `remove(product)` - usuwanie produktu z koszyka
        + metoda `onUpdate(callback)` - przekazany `callback` zostanie wywołany, gdy zmieni się zawartość koszyka
        + metoda `clearCart(callback)` - usuwanie całej zawartości koszyka

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
