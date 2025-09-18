import { Routes } from '@angular/router';
import { advicesRoutes } from './advices/advices.routes';
import { auctionsRoutes } from './auctions/auctions.routes';
import { NotFoundPageComponent } from './common/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auctions' },
  ...auctionsRoutes,
  ...advicesRoutes,
  { path: '**', component: NotFoundPageComponent}
  //{ path: '**', redirectTo: '/auctions' },
];
