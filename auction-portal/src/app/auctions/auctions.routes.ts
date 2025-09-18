import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';

export const auctionsRoutes: Routes = [
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
];
