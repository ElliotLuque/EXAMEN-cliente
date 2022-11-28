import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu.component';
import { PostAdminDeleteRoutedComponent } from './component/application/post/post-admin-delete-routed/post-admin-delete-routed.component';
import { PostAdminEditRoutedComponent } from './component/application/post/post-admin-edit-routed/post-admin-edit-routed/post-admin-edit-routed.component';
import { PostAdminPlistRoutedComponent } from './component/application/post/post-admin-plist-routed/post-admin-plist-routed.component';
import { PostAdminViewRoutedComponent } from './component/application/post/post-admin-view-routed/post-admin-view-routed.component';
import { UserAdminDeleteRoutedComponent } from './component/application/user/user-admin-delete-routed/user-admin-delete-routed.component';
import { UserAdminEditRoutedComponent } from './component/application/user/user-admin-edit-routed/user-admin-edit-routed.component';
import { UserAdminPlistRoutedComponent } from './component/application/user/user-admin-plist-routed/user-admin-plist-routed.component';
import { UserAdminViewRoutedComponent } from './component/application/user/user-admin-view-routed/user-admin-view-routed.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { PostAdminCreateRoutedComponent } from './component/application/post/post-admin-create-routed/post-admin-create-routed.component';
import { UserAdminCreateRoutedComponent } from './component/application/user/user-admin-create-routed/user-admin-create-routed.component';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostAdminDeleteRoutedComponent,
    PostAdminEditRoutedComponent,
    PostAdminPlistRoutedComponent,
    PostAdminViewRoutedComponent,
    UserAdminDeleteRoutedComponent,
    UserAdminEditRoutedComponent,
    UserAdminPlistRoutedComponent,
    UserAdminViewRoutedComponent,
    HomeComponent,
    PostAdminCreateRoutedComponent,
    UserAdminCreateRoutedComponent,
    PaginationUnroutedComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
