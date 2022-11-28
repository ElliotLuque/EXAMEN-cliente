import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdminDeleteRoutedComponent } from './post-admin-delete-routed.component';

describe('PostAdminDeleteRoutedComponent', () => {
  let component: PostAdminDeleteRoutedComponent;
  let fixture: ComponentFixture<PostAdminDeleteRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdminDeleteRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdminDeleteRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
