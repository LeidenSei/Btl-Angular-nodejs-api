import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterViewAdminComponent } from './master-view-admin.component';

describe('MasterViewAdminComponent', () => {
  let component: MasterViewAdminComponent;
  let fixture: ComponentFixture<MasterViewAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterViewAdminComponent]
    });
    fixture = TestBed.createComponent(MasterViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
