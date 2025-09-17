import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="mb-2 p-5 bg-warning">
      <h1>{{ title }}</h1>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  title = 'Auction Portal';
}
