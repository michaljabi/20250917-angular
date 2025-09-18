import { inject, Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuctionsResourceService {
  private httpClient = inject(HttpClient);
  private baseEndpoint = `http://localhost:3000/auctions`;

  getAll(): Observable<AuctionItem[]> {
    // GET...
    return this.httpClient.get<AuctionItem[]>(this.baseEndpoint);
  }

  addOne(auction: AuctionItem) {
    // POST...
  }
}
