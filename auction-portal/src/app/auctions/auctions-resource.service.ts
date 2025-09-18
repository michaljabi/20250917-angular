import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class AuctionsResourceService {
  
  getAll(): AuctionItem[] {
    // GET...
    return []
  }

  addOne(auction: AuctionItem) {
    // POST...
  }
}
