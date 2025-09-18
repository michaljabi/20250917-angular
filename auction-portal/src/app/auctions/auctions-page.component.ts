import { Component, inject, OnInit } from '@angular/core';
import { AuctionItem } from './auction-item';
import { JsonPipe, UpperCasePipe, LowerCasePipe, CurrencyPipe } from '@angular/common';
import { AuctionCardComponent } from './auction-card.component';
import { AuctionsResourceService } from './auctions-resource.service';

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
export class AuctionsPageComponent implements OnInit {
  auctions: AuctionItem[] = [];

  private readonly aucionsResourceService = inject(AuctionsResourceService);

  ngOnInit(): void {
    this.aucionsResourceService.getAll().subscribe((auctions: AuctionItem[]) => {
      this.auctions = auctions;
    });
  }
}
