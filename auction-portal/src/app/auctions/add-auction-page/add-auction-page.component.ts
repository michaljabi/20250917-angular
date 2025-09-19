import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  imports: [SharedModule],
  template: `<app-page-layout pageTitle="Nowa aukcja"> dodawanie... </app-page-layout> `,
  styles: ``,
})
export class AddAuctionPageComponent {}
