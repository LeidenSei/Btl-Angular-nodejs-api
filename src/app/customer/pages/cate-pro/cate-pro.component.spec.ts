import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateProComponent } from './cate-pro.component';

describe('CateProComponent', () => {
  let component: CateProComponent;
  let fixture: ComponentFixture<CateProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CateProComponent]
    });
    fixture = TestBed.createComponent(CateProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
