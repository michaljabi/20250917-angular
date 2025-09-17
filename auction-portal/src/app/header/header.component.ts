import { Component, Input } from '@angular/core';

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
export class HeaderComponent {
  @Input() myTitle = 'Auction Portal';
  @Input() myNumber = 1;

  dynamicPadding = 'p-5';

  shrinkPadding() {
    this.dynamicPadding = 'p-2';
  }

  get headerClasses() {
    return `mb-2 ${this.dynamicPadding} bg-warning`;
  }
}
