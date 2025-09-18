import { Component } from '@angular/core';
import { AuctionItem } from './auction-item';
import { JsonPipe, UpperCasePipe, LowerCasePipe, CurrencyPipe } from '@angular/common';

@Component({
  imports: [JsonPipe, UpperCasePipe, LowerCasePipe, CurrencyPipe],
  template: `
    <section>
      <h2>Lista aukcji {{ 200 | currency : 'USD' }}</h2>

      <div class="row">
        {{ auctions | json | uppercase | lowercase }}
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">1</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">2</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">3</div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">4</div>
      </div>
    </section>
  `,
  styles: ``,
})
export class AuctionsPageComponent {
  auctions: AuctionItem[] = [
    {
      id: '1',
      title: 'Części do aparatu',
      imgUrl: 'https://picsum.photos/id/36/600/600',
      description: 'Jakiś opis',
      price: 2000,
    },
    {
      id: '2',
      title: 'Mac Book',
      imgUrl: 'https://picsum.photos/id/48/600/600',
      description: 'Używany - ale sprawny',
      price: 4000,
    },
  ];
}
