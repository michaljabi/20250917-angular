import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [SharedModule, ReactiveFormsModule],
  template: `<app-page-layout pageTitle="Nowa aukcja">
    <section class="mt-2 row">
      <div class="col-6">
        <img class="img-thumbnail" alt="Podgląd fotografii" [src]="imgSrc" />
      </div>
      <div class="col-6">
        <form [formGroup]="auctionForm" (ngSubmit)="handleAuctionSubmit()">
          <div class="form-group">
            <label for="auctionTitle">Nazwa aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <fa-icon icon="edit"></fa-icon>
                </span>
              </div>
              <input
                id="auctionTitle"
                type="text"
                name="title"
                class="form-control"
                formControlName="title"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="auctionPrice">Cena aukcji</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-tag"></i>
                  <fa-icon icon="tag"></fa-icon>
                </span>
              </div>
              <input
                id="auctionPrice"
                type="number"
                name="price"
                class="form-control"
                formControlName="price"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="img">Zdjecie</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <fa-icon icon="image"></fa-icon>
                </span>
              </div>
              <input
                id="img"
                type="number"
                name="imgUrl"
                formControlName="imgId"
                class="form-control"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="auctionDescription">Szczegółowy opis</label>
            <div class="input-group mb-3">
              <textarea
                id="auctionDescription"
                rows="5"
                class="form-control"
                name="description"
                formControlName="description"
              ></textarea>
            </div>
          </div>
          <div class="text-right">
            <button class="btn btn-primary" type="submit">
              <fa-icon icon="gavel"></fa-icon> Dodaj aukcję
            </button>
          </div>
        </form>
      </div>
    </section>
  </app-page-layout> `,
  styles: `
  
    input.ng-touched.ng-invalid,
    textarea.ng-touched.ng-invalid {
      border: 2px solid #f14668;
    }

  `,
})
export class AddAuctionPageComponent {
  // Reactive Driven Form:
  private fb = inject(FormBuilder);

  auctionForm = this.fb.group({
    title: ['', Validators.required],
    imgId: [10, [Validators.min(1), Validators.max(1080)]],
    price: [0, Validators.required],
    description: [''],
  });

  // imgId = 1;

  get imgSrc() {
    return `https://picsum.photos/id/${this.auctionForm.value.imgId}/600/600`;
  }

  handleAuctionSubmit() {
    if (this.auctionForm.invalid) {
      console.log('To do....');
    }
    console.log('Aktaulna wartość form', this.auctionForm.value);
  }
}
