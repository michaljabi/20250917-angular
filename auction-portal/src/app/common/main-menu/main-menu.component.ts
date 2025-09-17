import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-main-menu',
  imports: [],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
      <button class="navbar-toggler" type="button" (click)="isMenuShown = !isMenuShown">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" [class.show]="isMenuShown">
        <ul class="navbar-nav">
          @for(item of items; track item.title) {
          <li class="nav-item">
            <a class="nav-link" [href]="item.href">{{ item.title }}</a>
          </li>
          } @empty { no items 😭 }
        </ul>
      </div>
    </nav>
  `,
  styles: ``,
})
export class MainMenuComponent implements OnInit, OnDestroy {
  isMenuShown = false;

  items: MenuItem[] = [
    { href: '/auctions', title: 'Aukcje' },
    { href: '/promotions', title: 'Promocje' },
    { href: '/advices', title: 'Podpowiadamy' },
  ];

  ngOnInit(): void {
    console.log('MainMenuComponent created!');
    window.addEventListener('resize', this.onResize);
  }

  // Do tematu "czyszczenia" aby nie mieć "memory leak" jeszcze wrócimy i wtedy te zapisy będa "bardziej zrozumiałe".
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  // tutaj musimy w ten sposób, ponieważ potrzebujemy referencji do tej konkretnej funkcji (metody) ale pisząc ją jako metodę, widow.addEventListener - zmieni kontekst
  onResize = (ev: Event) => {
    /// ev.target etc.
    const windowW = (ev.target as Window).innerWidth;
    if (windowW > 992) {
      this.isMenuShown = false;
    }
    // console.log(this);
  };
}
