import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminPlistRoutedComponent } from './user-admin-plist-routed.component';

describe('UserAdminPlistRoutedComponent', () => {
  let component: UserAdminPlistRoutedComponent;
  let fixture: ComponentFixture<UserAdminPlistRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminPlistRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdminPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
