import { AuctionItem } from '../auction-item';

export interface CartItem {
  // Indexed Access Types
  // https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
  id: AuctionItem['id']; // :string
  amount: number;
  auction: AuctionItem;
  // price: number;
}

// IMPLEMENTATIOn:

/*
const item: CartItem = {
  amount: 3,
  id: '4',
  auction: {
    id: '4',
    title: 'Samochoód',
    imgUrl: 'https://picsum.photos/id/183/600/600',
    description: 'Zabytkowy ogórek',
    price: 1200,
  },
//   get price() {
//     return this.amount * this.auction.price;
//   }
};
*/