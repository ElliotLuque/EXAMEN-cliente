import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdminCreateRoutedComponent } from './post-admin-create-routed.component';

describe('PostAdminCreateRoutedComponent', () => {
  let component: PostAdminCreateRoutedComponent;
  let fixture: ComponentFixture<PostAdminCreateRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdminCreateRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdminCreateRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
