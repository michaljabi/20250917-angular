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
        } @empty { @if(isLoading) {
        <div class="alert alert-info">Ładowanie....</div>
        } @else if(errorMessage) {
        <div class="alert alert-danger">{{ errorMessage }}</div>
        } @else {
        <div class="alert alert-warn">Nie mamy jeszcze aukcji....</div>
        } }
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
  isLoading = false;
  errorMessage = '';

  private readonly aucionsResourceService = inject(AuctionsResourceService);

  ngOnInit(): void {
    this.loadAuctions();
  }

  loadAuctions() {
    // Rozwiązanie "poprawne", ale obsługujemy tylko HAPPY PATH !!!!
    // this.aucionsResourceService.getAll().subscribe((auctions: AuctionItem[]) => {
    //   this.auctions = auctions;
    // });
    this.isLoading = true;
    this.errorMessage = '';
    this.aucionsResourceService.getAll().subscribe({
      next: (auctions: AuctionItem[]) => {
        this.auctions = auctions;
        this.isLoading = false;
        console.log(auctions);
      },
      error: (err: Error) => {
        console.error(err);
        this.errorMessage = 'Nie udało się pobrać aukcji...';
        this.isLoading = false;
      },
      // complete: () => {
      //   console.log('Completed !');
      // },
    });

    // this.aucionsResourceService.getAll()
  }
}
