import { inject, Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuctionsResourceService {
  private httpClient = inject(HttpClient);
  private baseEndpoint = `http://localhost:3000/auctions`;

  getAll(): Observable<AuctionItem[]> {
    // GET...
    return this.httpClient
      .get<AuctionItem[]>(this.baseEndpoint)
      .pipe(
        map((as: AuctionItem[]) => as.filter((a) => !a.title.toLowerCase().includes('smartfon')))
      );
  }

  addOne(auction: AuctionItem) {
    // POST...
  }
}
