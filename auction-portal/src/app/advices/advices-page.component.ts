import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [SharedModule, RouterOutlet, RouterLink],
  template: `
    <app-page-layout pageTitle="Podpowiadamy co wybrać !">
      <section class="row">
        <div class="col-12 col-sm-4">
          <ul class="list-group">
            <li class="list-group-item">
              <a routerLink="/advices/1"> Jak wybrać dobry komputer? </a>
            </li>
            <li class="list-group-item">
              <a routerLink="/advices/2"> Inny tytuł </a>
            </li>
            <li class="list-group-item">
              <a routerLink="/advices/3"> Co robić kiedy... </a>
            </li>
            <li class="list-group-item">
              <a routerLink="/advices/4"> Artykuł 4 </a>
            </li>
            <li class="list-group-item">
              <button class="btn btn-primary" routerLink="/advices/67">Artykuł 67</button>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-8">
          <router-outlet></router-outlet>
        </div>
      </section>
    </app-page-layout>
  `,
  styles: ``,
})
export class AdvicesPageComponent {}
