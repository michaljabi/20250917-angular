import { Component, input, InputSignal } from '@angular/core';
import { AuctionItem } from './auction-item';

@Component({
  selector: 'app-auction-card',
  imports: [],
  template: `
    <div class="card">
      @let a = auction();
      <div class="card-header">{{ a.title }}</div>
      <img class="card-img" [src]="a.imgUrl" [alt]="a.title" />
      <div class="card-body">
        <p class="card-text">{{ a.description }}</p>
        <div class="d-flex justify-content-between align-content-center">
          <strong> {{ a.title }} zł</strong>
          <button class="btn btn-primary">
            <i class="fa fa-cart-plus">+</i>
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

  //a: string = 'a';
  // two = 2;
}
