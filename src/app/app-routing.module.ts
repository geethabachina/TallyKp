import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
// import { AdminComponent } from './core/admin/admin.component';
// import { CoreComponent } from './core/core.component';
import { SelectOptionComponent } from './core/select-option/select-option.component';
import { ImportComponent } from './core/import/import.component';
import { WpImportComponent } from './core/wp-import/wp-import.component';
import { AddWpImportComponent } from './core/add-wp-import/add-wp-import.component';
import { WpApproveComponent } from './core/wp-approve/wp-approve.component';
import { LogoutComponent } from './core/logout/logout.component';
import { CoreComponent } from './core/core.component';


//const adminRoutes: Routes = [
  // {
  //   path: 'userGroup',
  //   component: UserGroupComponent,
  // },
  // {
  //   path: 'addUserGroup',
  //   component: AddUserGroupComponent,
  // }
//];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'selectOption',
    component: SelectOptionComponent
  },
  {
    path: 'import',
    component: ImportComponent
  },
  {
    path: 'wpImport',
    component: WpImportComponent
  },
  {
    path: 'addWpImport',
    component: AddWpImportComponent
  },
  {
    path: 'wpApprove',
    component: WpApproveComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'core',
    component: CoreComponent,
    children: [
      {
        path: 'wpImport',
        component: WpImportComponent
      },
      {
        path: 'wpApprove',
        component: WpApproveComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

