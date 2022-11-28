import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdminPlistRoutedComponent } from './post-admin-plist-routed.component';

describe('PostAdminPlistRoutedComponent', () => {
  let component: PostAdminPlistRoutedComponent;
  let fixture: ComponentFixture<PostAdminPlistRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdminPlistRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdminPlistRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
