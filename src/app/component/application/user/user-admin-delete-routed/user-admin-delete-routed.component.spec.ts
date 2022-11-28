import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminDeleteRoutedComponent } from './user-admin-delete-routed.component';

describe('UserAdminDeleteRoutedComponent', () => {
  let component: UserAdminDeleteRoutedComponent;
  let fixture: ComponentFixture<UserAdminDeleteRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminDeleteRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdminDeleteRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
