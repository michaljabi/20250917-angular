import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { MainMenuComponent } from "./common/main-menu/main-menu.component";
import { CartItemsCountComponent } from "./auctions/cart/cart-items-count/cart-items-count.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainMenuComponent, CartItemsCountComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TESTOWY');

  constructor() {
    setTimeout(() => {
      // this.title.set('?');
      this.title.update((text) => text + '?');
    }, 3000);
  }
}
