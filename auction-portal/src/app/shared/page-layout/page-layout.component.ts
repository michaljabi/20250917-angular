import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: false,
  template: `
    <section>
      <div class="row">
        <h2 class="col-12" [ngClass]="{ 'col-sm-4 col-md-7': myDiv.innerHTML.length }">
          {{ pageTitle() }}
        </h2>
        <div class="col-12 col-sm-8 col-md-5" #myDiv>
          <ng-content select="[rightSide]" />
        </div>
      </div>
      <ng-content />
    </section>
  `,
  styles: ``,
})
export class PageLayoutComponent {
  pageTitle = input('Moja stronka');
}
