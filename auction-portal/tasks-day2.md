## Zadanie 8

1. Dodaj brakujące strony menu: `/promotions` , `/advices`
2. Dla komponentu `advices-page.component` utwórz nowy katalog `advices` i umieś go tam jako `--flat`
3. Strona `promotions` - dotyczy aukcji - więc wrzuć ja do folderu `auctions`

Pomocny link:

- https://angular.dev/guide/routing/define-routes

## Zadanie 9

1. Na podstawie setu danych:
```json
{
  "auctions": [
    {
      "id": "1",
      "title": "Części do aparatu",
      "imgUrl": "https://picsum.photos/id/36/600/600",
      "description": "Jakiś opis",
      "price": 2000
    },
    {
      "id": "2",
      "title": "Mac Book",
      "imgUrl": "https://picsum.photos/id/48/600/600",
      "description": "Używany - ale sprawny",
      "price": 4000
    },
    {
      "id": "3",
      "title": "Smartfon",
      "imgUrl": "https://picsum.photos/id/160/600/600",
      "price": 800
    },
    {
      "id": "4",
      "title": "Samochoód",
      "imgUrl": "https://picsum.photos/id/183/600/600",
      "description": "Zabytkowy ogórek",
      "price": 1200
    },
    {
      "id": "a833",
      "title": "fonik",
      "imgUrl": "https://picsum.photos/id/3/600/600",
      "price": 2000
    }
  ]
}
```

2. Ustal `interface` dla auckji i umieść ten `interface` w osobnym pliku

## Zadanie 10:

1. przenieś tablicę routingu dla  `promotions`  i  `auctions`  do osobnego pliku  `auctions.routes.ts`  w katalogu  auctions 


## Zadanie 11 - naprawa linków w `main-menu`

1. Użyj dyrektywy `routerLink` w elementach `<a>` w menu
2. sprawdź czy strona się nie odżwieża po przechodzeniu po linkach

Pomocny link:

- https://angular.dev/api/router/RouterLink#usage-notes

## Zadanie 12 - instalacja `json-server`

1. zainstaluj w projekcie z flagą `-D` (wpadnie do devDependencies) bibliotekę: [json-server](https://www.npmjs.com/package/json-server)
2. dodaj skrypt do uruchamiania serwera API (fikcyjnego) z danymi z pliku `db-data.json`:
3. plik utwórz od zera (w katalogu głównym projektu) i dodaj do niego dane z zadania `9.`
4. upewnij się, że serwer działa poprawnie i na adresie `http://localhost:3000/auctions` wyświetla aukcje w formacie `JSON`

## Zadanie 13 - przygotowanie wyświetlania listy aukcji:

1. Do strony `/auctions` dodaj kod:
```html
<div class="row">
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <!-- TODO: dodaj wyświetlanie aukcji (komponent) -->
  </div>
</div>
```
2. powtarzanie tego kodu - pozwoli na wyświetlenie auckji
3. dodaj odpowiedni komponent `auction-card` i dodaj w nim `input()` związany z `interface` do `AuctionItem`
4. jego template to:
```html
<div class="card">
  <div class="card-header">Tytuł</div>
  <img class="card-img" src="" alt="" />
  <div class="card-body">
    <p class="card-text">Opis aukcji</p>
    <div class="d-flex justify-content-between align-content-center">
      <strong> 0 zł</strong>
      <button class="btn btn-primary">
        <i class="fa fa-cart-plus"></i>
      </button>
    </div>
  </div>
</div>
```
5. wrzuć sobie przykładową aukcję w tablicę: `auctions` w komponenncie `auctions-page`
6. spróbuj wyświetlić te aukcje z użyciem `@for`
7. żeby nie musieć odpakowywać sygnału co chwila na template sprawdź użycie `@let`
   https://angular.dev/api/core/@let