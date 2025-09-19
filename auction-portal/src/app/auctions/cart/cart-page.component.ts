import { Component, inject } from '@angular/core';
import { CartService } from './cart.service';
import { JsonPipe } from '@angular/common';
import { CartItem } from './cart-item';
import { SharedModule } from '../../shared/shared.module';

@Component({
  imports: [JsonPipe, SharedModule],
  template: `
    <app-page-layout pageTitle="Twój koszyk">
      {{ cartService.getAll() | json }}
    </app-page-layout>
  `,
  styles: ``,
})
export class CartPageComponent {
  cartService = inject(CartService);

  constructor() {
    // pamiętaj żeby zabepieczyć dane w statefull service:
    // this.cartService.getAll().push({ id: 'TROLL' } as CartItem);
  }
}
