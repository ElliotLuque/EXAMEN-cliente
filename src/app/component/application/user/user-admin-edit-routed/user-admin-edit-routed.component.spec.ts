import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminEditRoutedComponent } from './user-admin-edit-routed.component';

describe('UserAdminEditRoutedComponent', () => {
  let component: UserAdminEditRoutedComponent;
  let fixture: ComponentFixture<UserAdminEditRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminEditRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdminEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
