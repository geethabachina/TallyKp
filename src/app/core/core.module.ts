import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core.component';
import { SelectOptionComponent } from './select-option/select-option.component';
import { ImportComponent } from './import/import.component';
import { WpImportComponent } from './wp-import/wp-import.component';
import { AddWpImportComponent } from './add-wp-import/add-wp-import.component';
import { WpApproveComponent } from './wp-approve/wp-approve.component';
import { LogoutComponent } from './logout/logout.component';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LoginComponent,
    CoreComponent,
    SelectOptionComponent,
    ImportComponent,
    WpImportComponent,
    AddWpImportComponent,
    WpApproveComponent,
    LogoutComponent,
    ModalPopUpComponent
  ]
})
export class CoreModule { }
