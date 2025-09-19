import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { AuctionItem } from '../auction-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  addItem(auction: AuctionItem) {
    const auctionRef = this.cartItems.find((ci) => ci.id === auction.id);
    if (auctionRef) {
      auctionRef.amount++;
    } else {
      this.cartItems.push({
        id: auction.id,
        amount: 1,
        auction,
      });
    }
  }

  getAll(): CartItem[] {
    return this.cartItems;
  }

  getItemsCount(): number {
    // [I, I, I]
    // map
    // [2, 6, 1]
    // reduce
    // (0+2) , (2+6) , (8 + 1) -> 9
    return this.cartItems
      .map((i) => i.amount)
      .reduce((acc: number, value: number) => acc + value, 0);
  }
}
