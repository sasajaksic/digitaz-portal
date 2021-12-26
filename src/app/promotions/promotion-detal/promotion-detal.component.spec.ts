import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionDetalComponent } from './promotion-detal.component';

describe('PromotionDetalComponent', () => {
  let component: PromotionDetalComponent;
  let fixture: ComponentFixture<PromotionDetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionDetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
