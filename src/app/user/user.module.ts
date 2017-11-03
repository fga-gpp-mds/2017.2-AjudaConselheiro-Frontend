import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreateUserComponent } from '../user/create/create-user.component';
import { UserListComponent } from './list/user-list.component';
import { LoginComponent } from './login/login.component';
import { UserService, AlertService, AuthenticationService } from '../services/index';
import { UserEditComponent } from './edit/user-edit.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [
    UserListComponent,
    CreateUserComponent,
    UserEditComponent,
    LoginComponent
  ],
  providers: [
    UserService, AlertService, AuthenticationService
  ]
})
export class UserModule { }
