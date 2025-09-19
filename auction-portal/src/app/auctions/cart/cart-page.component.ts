import { Component, inject } from '@angular/core';
import { CartService } from './cart.service';
import { JsonPipe } from '@angular/common';
import { CartItem } from './cart-item';

@Component({
  imports: [JsonPipe],
  template: `
    <section>
      <h2>Koszyk</h2>
      <div>
        {{ cartService.getAll() | json }}
      </div>
    </section>
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
