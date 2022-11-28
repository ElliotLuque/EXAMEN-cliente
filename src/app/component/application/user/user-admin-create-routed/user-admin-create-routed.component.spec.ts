import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminCreateRoutedComponent } from './user-admin-create-routed.component';

describe('UserAdminCreateRoutedComponent', () => {
  let component: UserAdminCreateRoutedComponent;
  let fixture: ComponentFixture<UserAdminCreateRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminCreateRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdminCreateRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
