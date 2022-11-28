import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminViewRoutedComponent } from './user-admin-view-routed.component';

describe('UserAdminViewRoutedComponent', () => {
  let component: UserAdminViewRoutedComponent;
  let fixture: ComponentFixture<UserAdminViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminViewRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdminViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
