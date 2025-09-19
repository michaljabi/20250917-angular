import { Route } from '@angular/router';
import { AdvicesPageComponent } from './advices-page.component';
import { AdviceDetailsComponent } from './advice-details.component';

export const advicesRoutes: Route[] = [
  {
    path: 'advices',
    component: AdvicesPageComponent,
    children: [
      { path: '', component: AdviceDetailsComponent },
      { path: ':adviceId', component: AdviceDetailsComponent },
      { path: ':adviceId/:hello/test', component: AdviceDetailsComponent },
    ],
  },
];
