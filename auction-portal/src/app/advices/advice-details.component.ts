import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, input, OnInit, effect } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  imports: [JsonPipe, AsyncPipe],
  template: `
    @if(adviceId()) {
    <div>Przeglądasz artykuł {{ adviceId() }}</div>
    } @else { Wybierz artykuł po lewej żeby czytać tutaj... } Wartość hello: {{ hello() }}

    <hr />
    {{ activatedRoute.queryParams | async | json }}
    <hr />
    <div>
      Infromacje activated route({{ activatedRoute.params | async | json }}):
      <pre>{{ activatedRoute.snapshot.params | json }}</pre>
      <button class="btn btn-danger" (click)="router.navigate(['/'])">Go back</button>
    </div>
  `,
  styles: ``,
})
export class AdviceDetailsComponent implements OnInit {
  adviceId = input('');
  hello = input('');
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    // co zrobić jeśli chcemy Efekt uboczny gdy mamy sygnały?!
    console.warn('Sygnał ma wartość', this.adviceId());
    effect(() => {
      console.warn('Sygnał ma wartość', this.adviceId());
      this.callBackend(this.adviceId());
    });
  }

  ngOnInit(): void {
    console.log('activatedRoute.snapshot.params!', this.activatedRoute.snapshot.params);
    // To pobierz się w ten sposób TYLKO jednoroazowo, bo komponent nie ulegnie onDestroy jeśli ścieżka jest "ta sama" (dynamiczny parametr)
    console.log('Pobieram z backendu', Number(this.activatedRoute.snapshot.params['adviceId']));

    // co zrobić jeśli chcemy ActivatedRoute ?
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log('Pobieram z backendu aktualne', Number(params['adviceId']));
    });

    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      console.log('queryParams', queryParams);
    });
  }

  callBackend(id: string) {
    console.log('Hipotetyczny strzał do backendu przez service', id);
  }
}
