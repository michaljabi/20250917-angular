import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items-count',
  imports: [SharedModule],
  template: `
    <app-notification>
      Masz już {{ cartService.getItemsCount() }} aukcji w koszyku
    </app-notification>
  `,
  styles: ``,
})
export class CartItemsCountComponent {
  cartService = inject(CartService);
}
