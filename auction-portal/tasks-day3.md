## Zadanie 17 - Dokończenie menu

1. Dodaj na koniec widoku w komponencie `app-main-menu` kod HTML pomiędzy jego znacznikami:

```html
....
    </div>
    <!-- tutaj wklej kod z buttonami poniżej -->
</nav>
```

2. Kod z buttonami do dodania:

```html
<div class="text-light d-flex gap-2">
  <a class="btn btn-outline-primary">
     <fa-icon icon="plus"/> Dodaj 
  </a>
  <a class="btn btn-outline-secondary">
    <fa-icon icon="shopping-basket"/> Koszyk
  </a>
</div>
```

3. Dodaj brakujące strony `add-auction-page` oraz `cart-page` do routingu.
4. Potwierdź, że działają prawidłowo po kliknięciu na przyciski powyżej (dodaj / koszyk)

## Zadanie 18 "Mechanizm koszyka"

1. Przygotuj nowy serwis: `cart`
2. Przechowuj w nim wszystkie elementy w koszyku
3. Wymyśl `interface` dla elementu w koszyku
4. Dodaj metody do:

- dodawania aukcji do koszyka
- pobierania listy wszystkich elementów w koszyku
- pobierania ilości wszystkich aukcji w koszyku

5. Wyświetlaj ilość aukcji w koszyku za pomocą nowego komponentu, jego HTML może wyglądać tak:

```html
<app-notification> Masz już {{0}} aukcji w koszyku </app-notification>
```

6. Podczep `service` z koszykiem za pomocą `DI` do tego komponentu i pokazuj właściwą ilość elementów
7. Podczep ten `service` również do `auction-card` i uruchamiaj zdarzenie dodawania aukcji do koszyka
8. Zadbaj o to, żeby zamiast ilości pokazywać "Koszyk jest pusty" jeśli `count === 0`.
9. Do `auctions-card.component` też wczep `DI` koszyk i połącz z dodawaniem do koszyka
10. Do `cart-page.component` też wczep `DI` koszyk i pokazuj za pomocą `|json` pipe elementy w koszyku

## Zadanie 19 `auction-card.component` should be DUMMY!

1. Usuń `DI` serwisu `cart.service` z komponentu `auction-card.component`
2. Chcemy "ogłupić" komponent `auction-card` tak aby nie wiedział do kogo wysłać info o dodaniu do koszyka
3. Zamiast `DI` tutaj do `cart.service` przesuń `DI` wyżej do `auctions-page.component` a tutaj wyślij `output` `event` odpowiedni z aukcją
4. Wtedy - komponent rodzica będzie wiedział do jakiego serwisu wrzucić aukcje a `auction-card` nie ma pojęcia, kto dostarcza `input` z aukcją i kto odbiera aukcje
5. wymyśl odpowiednią nazwę event'u


## Zadanie 20 - shared `page-layout.component`

1. W module `shared` wygeneruj nowy komponent `page-layout`, jednak użyj następujących flag:
2. `ng g c shared/page-layout --standalone=false --export --dry-run`
3. Tak możesz puścić komendę w głównym katalogu projektu, zrozumie on że chodzi o moduł `shared`
4. `--standalone=false` spowoduje, że komponent zostanie przygotowany zgodnie z założeniami `shared`, będzie tam deklarowany
5. `--export` spowoduje, że odrazu zostanie on dodany do tablicy `exports: []` w module i można będzie `page-layout` używać w całej aplikacji
6. W odpowiednim momencie usuń flagę `--dry-run` i dodaj następujący kod komponentu:

```html
<section>
  <div>
    <h2>{{ pageTitle() }}</h2>
  </div>
  <ng-content />
</section>
```

7. gdzie `pageTitle()` to `input()` signal, który można podać jako `pageTitle=''` z komponentu `parent`
8. Osadź `app-page-layout` na `/promotions` , `/advices`, `/add-auction` oraz `/cart`
9. Zobacz jak działa `ng-content` na podstawie komponentu `app-notification` i przygotuj przykładowy kod, oraz ustal `pageTitle` dla każdej storny np. `Aukcje na promocji`, `Podpowiadamy co wybrać !`, `Twój koszyk`, `Nowa aukcja`

https://angular.dev/guide/templates/control-flow
https://angular.dev/guide/templates/ng-content
