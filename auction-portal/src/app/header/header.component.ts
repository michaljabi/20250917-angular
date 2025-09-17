import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header [class]="headerClasses" (mouseover)="shrinkPadding()">
      <h1>{{ myTitle }} {{ myNumber }}</h1>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() myTitle = 'Auction Portal';
  @Input() myNumber = 1;

  dynamicPadding = 'p-5';

  ngOnInit(): void {
    console.log('HeaderComponent created!');
    window.addEventListener('resize', this.onResize);
  }

  // Do tematu "czyszczenia" aby nie mieć "memory leak" jeszcze wrócimy i wtedy te zapisy będa "bardziej zrozumiałe".
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  // tutaj musimy w ten sposób, ponieważ potrzebujemy referencji do tej konkretnej funkcji (metody) ale pisząc ją jako metodę, widow.addEventListener - zmieni kontekst 
  onResize = (ev: Event) => {
    /// ev.target etc.
    console.log((ev.target as Window).innerWidth);
    console.log(this)
  };

  shrinkPadding() {
    this.dynamicPadding = 'p-2';
  }

  get headerClasses() {
    return `mb-2 ${this.dynamicPadding} bg-warning`;
  }
}
