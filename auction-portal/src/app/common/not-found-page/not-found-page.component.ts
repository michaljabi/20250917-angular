import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <section>
      <h2>Nie znaleziono</h2>
      <div class="p-3">
        Strona <code>{{ activatedRoute.snapshot.url }}</code> nie istnieje !
      </div>

      <button class="btn btn-outline-primary my-2" routerLink="/">Powrót do 🏠</button>
    </section>
  `,
  styles: ``,
})
export class NotFoundPageComponent {
  activatedRoute = inject(ActivatedRoute);

  // Ten zapis w TS
  /*
  public readonly activatedRoute: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  } 
  */
  // Można uprościć tak:
  // constructor(public readonly activatedRoute: ActivatedRoute) {}
}
