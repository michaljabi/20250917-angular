import { inject, Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuctionsResourceService {
  // Stateless service
  private httpClient = inject(HttpClient);
  private baseEndpoint = `${environment.baseURL}/auctions`;

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
    return this.httpClient.post<AuctionItem>(this.baseEndpoint, auction);
  }

  fakeGetAllToTest(): Observable<AuctionItem[]> {
    return of([
      {
        id: '4',
        title: 'Samochoód',
        imgUrl: 'https://picsum.photos/id/183/600/600',
        description: 'Zabytkowy ogórek',
        price: 1200,
      },
    ]);
  }

  otherObservable(): Observable<string> {
    return of('Hello', 'ok', 'bye');
  }
}
