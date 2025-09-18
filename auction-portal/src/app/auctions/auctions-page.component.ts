import { Component } from '@angular/core';
import { AuctionItem } from './auction-item';
import { JsonPipe, UpperCasePipe, LowerCasePipe, CurrencyPipe } from '@angular/common';
import { AuctionCardComponent } from './auction-card.component';

@Component({
  imports: [JsonPipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, AuctionCardComponent],
  template: `
    <section>
      <h2>Lista aukcji</h2>

      <div class="row">
        @for(a of auctions; track a.id) {
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <app-auction-card [auction]="a" />
        </div>
        } @empty {
        <div class="alert alert-info">Nie ma jeszcze aukcji....</div>
        }
      </div>
      <div class="my-4">
        {{ 200 | currency : 'USD' }}
        <hr />
        {{ { name: 'Michał' } | json | uppercase | lowercase }}
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
