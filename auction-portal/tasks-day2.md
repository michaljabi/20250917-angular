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
