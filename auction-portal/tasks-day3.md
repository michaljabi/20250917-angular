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