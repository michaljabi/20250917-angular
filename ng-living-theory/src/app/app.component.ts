import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu.component';
import { HelloWorld } from './hello-world/hello-world';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, HelloWorld],
  template: `
    <main class="container mb-5">
      <header class="hero is-info">
        <div class="hero-body">
          <h1 class="title">
            {{ 6 + 1 }}
            Angular Live Theory ?? ? {{ title }} {{ title }}
          </h1>
          <h4 class="subtitle">sprawdź jak działa {{ title }}!...</h4>
        </div>
      </header>
      <app-hello-world />
      <app-hello-world />
      <app-hello-world />
      <app-hello-world />
      <app-hello-world />
      <app-hello-world />
      <app-hello-world />
      <section class="columns mt-5">
        <app-menu></app-menu>
        <div class="column is-9 content">
          <router-outlet></router-outlet>
        </div>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'HELLO FORM ANGULAR';

  constructor() {
    setTimeout(() => {
      this.title = '???! 🙋';
    }, 5000);
  }
}
