import { Routes } from '@angular/router';
import { advicesRoutes } from './advices/advices.routes';
import { auctionsRoutes } from './auctions/auctions.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auctions' },
  ...auctionsRoutes,
  ...advicesRoutes,
];
