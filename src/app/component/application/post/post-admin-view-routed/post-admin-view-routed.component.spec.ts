import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdminViewRoutedComponent } from './post-admin-view-routed.component';

describe('PostAdminViewRoutedComponent', () => {
  let component: PostAdminViewRoutedComponent;
  let fixture: ComponentFixture<PostAdminViewRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdminViewRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdminViewRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
