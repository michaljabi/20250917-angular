import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  imports: [SharedModule],
  template: `<app-page-layout pageTitle="Aukcje na promocji"> </app-page-layout>`,
  styles: ``,
})
export class PromotionsPageComponent implements OnInit {
  ngOnInit(): void {
    // TODO: dynamic segments - talk about + go back here...
    console.log('PromotionsPageComponent INIT');
  }
}
