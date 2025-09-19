import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CartService } from '../cart.service';
import { I18nPluralPipe } from '@angular/common';

@Component({
  selector: 'app-cart-items-count',
  imports: [SharedModule, I18nPluralPipe],
  template: `
    <app-notification>
      @let amount = cartService.getItemsCount(); @if(amount) { Masz już
      {{ amount | i18nPlural : amountMapping }}
      w koszyku } @else { Koszyk jest pusty... }
    </app-notification>
  `,
  styles: ``,
})
export class CartItemsCountComponent {
  cartService = inject(CartService);

  amountMapping: Record<string, string> = {
    '=1': '# aukcję',
    '=2': '# aukcje',
    '=3': '# aukcje',
    '=4': '# aukcje',
    other: '# aukcji',
  };
}
