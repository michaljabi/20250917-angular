import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: false,
  template: `
    <section>
      <div>
        <h2>{{ pageTitle() }}</h2>
      </div>
      <ng-content />
    </section>
  `,
  styles: ``,
})
export class PageLayoutComponent {
  pageTitle = input('Moja stronka');
}
