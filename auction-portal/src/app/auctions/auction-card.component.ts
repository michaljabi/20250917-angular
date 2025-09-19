import { Component, inject, input, InputSignal, output } from '@angular/core';
import { AuctionItem } from './auction-item';
import { SharedModule } from '../shared/shared.module';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-auction-card',
  imports: [SharedModule],
  template: `
    <div class="card">
      @let a = auction();
      <div class="card-header">{{ a.title }}</div>
      <img class="card-img" [src]="a.imgUrl" [alt]="a.title" />
      <div class="card-body">
        <p class="card-text">{{ a.description }}</p>
        <div class="d-flex justify-content-between align-content-center">
          <strong> {{ a.price }} zł</strong>
          <button class="btn btn-primary" (click)="addToCart.emit(a)">
            <fa-icon icon="cart-plus" />
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AuctionCardComponent {
  // auction: InputSignal<AuctionItem> = input.required<AuctionItem>();
  auction = input.required<AuctionItem>();
  addToCart = output<AuctionItem>();

  //a: string = 'a';
  // two = 2;

  // handleAddToCartClick(auction: AuctionItem) {
  //   this.cartService.addItem(auction);
  // }
}

// Najprostszy typ generyczny w TS to Array, można go zapisać na 2 sposoby
// const sample: Array<string> = ['12'];
// const sampleTS: string[] = ['12'];

// Tutaj inna sytuacja, deklarujemy 3 elementowy Array!
// const tuple: [string, number, string] = ['A', 3, 'zA'];
