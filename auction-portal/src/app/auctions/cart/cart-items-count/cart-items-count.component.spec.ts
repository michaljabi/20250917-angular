import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsCountComponent } from './cart-items-count.component';

describe('CartItemsCountComponent', () => {
  let component: CartItemsCountComponent;
  let fixture: ComponentFixture<CartItemsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemsCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItemsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
