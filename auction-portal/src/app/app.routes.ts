import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { AdvicesPageComponent } from './advices/advices-page.component';
import { PromotionsPageComponent } from './auctions/promotions-page/promotions-page.component';

export const routes: Routes = [
  { path: 'auctions', component: AuctionsPageComponent },
  { path: 'promotions', component: PromotionsPageComponent },
  { path: 'advices', component: AdvicesPageComponent },
];
