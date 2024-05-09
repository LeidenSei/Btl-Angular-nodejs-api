import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductComponent } from './app-product.component';

describe('AppProductComponent', () => {
  let component: AppProductComponent;
  let fixture: ComponentFixture<AppProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppProductComponent]
    });
    fixture = TestBed.createComponent(AppProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
