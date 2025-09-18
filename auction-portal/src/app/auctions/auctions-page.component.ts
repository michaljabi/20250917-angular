import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuctionItem } from './auction-item';
import { JsonPipe, UpperCasePipe, LowerCasePipe, CurrencyPipe } from '@angular/common';
import { AuctionCardComponent } from './auction-card.component';
import { AuctionsResourceService } from './auctions-resource.service';
import { Subscription } from 'rxjs';
import { SharedModule } from '../shared/shared.module';

@Component({
  imports: [
    JsonPipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    AuctionCardComponent,
    SharedModule,
  ],
  template: `
    <section>
      <div class="row">
        <h2 class="col-12 col-sm-4 col-md-7">Lista aukcji</h2>
        <div class="col-12 col-sm-8 col-md-5">
          <app-search-bar (search)="handleSearch($event)" />
        </div>
      </div>

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
export class AuctionsPageComponent implements OnInit, OnDestroy {
  auctions: AuctionItem[] = [];
  isLoading = false;
  errorMessage = '';

  mySub?: Subscription;

  private readonly aucionsResourceService = inject(AuctionsResourceService);

  ngOnInit(): void {
    this.loadAuctions();
  }

  ngOnDestroy(): void {
    this.mySub?.unsubscribe();
  }

  handleSearch(value: string) {
    console.log(value);
  }

  loadAuctions() {
    // Rozwiązanie "poprawne", ale obsługujemy tylko HAPPY PATH !!!!
    // this.aucionsResourceService.getAll().subscribe((auctions: AuctionItem[]) => {
    //   this.auctions = auctions;
    // });
    this.isLoading = true;
    this.errorMessage = '';
    this.mySub = this.aucionsResourceService.fakeGetAllToTest().subscribe({
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
