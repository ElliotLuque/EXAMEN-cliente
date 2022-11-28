import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAdminCreateRoutedComponent } from './component/application/post/post-admin-create-routed/post-admin-create-routed.component';
import { PostAdminDeleteRoutedComponent } from './component/application/post/post-admin-delete-routed/post-admin-delete-routed.component';
import { PostAdminEditRoutedComponent } from './component/application/post/post-admin-edit-routed/post-admin-edit-routed/post-admin-edit-routed.component';
import { PostAdminPlistRoutedComponent } from './component/application/post/post-admin-plist-routed/post-admin-plist-routed.component';
import { PostAdminViewRoutedComponent } from './component/application/post/post-admin-view-routed/post-admin-view-routed.component';
import { UserAdminCreateRoutedComponent } from './component/application/user/user-admin-create-routed/user-admin-create-routed.component';
import { UserAdminDeleteRoutedComponent } from './component/application/user/user-admin-delete-routed/user-admin-delete-routed.component';
import { UserAdminEditRoutedComponent } from './component/application/user/user-admin-edit-routed/user-admin-edit-routed.component';
import { UserAdminPlistRoutedComponent } from './component/application/user/user-admin-plist-routed/user-admin-plist-routed.component';
import { UserAdminViewRoutedComponent } from './component/application/user/user-admin-view-routed/user-admin-view-routed.component';
import { HomeComponent } from './component/shared/routed/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  
  { path: 'admin/post/plist', component: PostAdminPlistRoutedComponent}, 
  { path: 'admin/post/view/:id', component: PostAdminViewRoutedComponent},
  { path: 'admin/post/delete/:id', component: PostAdminDeleteRoutedComponent},
  { path: 'admin/post/edit/:id', component: PostAdminEditRoutedComponent},
  { path: 'admin/post/create', component: PostAdminCreateRoutedComponent},

  { path: 'admin/user/plist', component: UserAdminPlistRoutedComponent},
  { path: 'admin/user/view/:id', component: UserAdminViewRoutedComponent},
  { path: 'admin/user/delete/:id', component: UserAdminDeleteRoutedComponent},
  { path: 'admin/user/edit/:id', component: UserAdminEditRoutedComponent},
  { path: 'admin/user/create', component: UserAdminCreateRoutedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
