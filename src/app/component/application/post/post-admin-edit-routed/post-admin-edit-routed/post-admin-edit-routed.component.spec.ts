import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdminEditRoutedComponent } from './post-admin-edit-routed.component';

describe('PostAdminEditRoutedComponent', () => {
  let component: PostAdminEditRoutedComponent;
  let fixture: ComponentFixture<PostAdminEditRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdminEditRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdminEditRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
