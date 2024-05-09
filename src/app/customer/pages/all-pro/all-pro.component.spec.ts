import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProComponent } from './all-pro.component';

describe('AllProComponent', () => {
  let component: AllProComponent;
  let fixture: ComponentFixture<AllProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProComponent]
    });
    fixture = TestBed.createComponent(AllProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
