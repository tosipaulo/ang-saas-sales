import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SignComponent } from './sign.component';
import { SignRoutingModule } from './sign-routing.module';

import { InputModule } from "../../components/input/input.module";
import { ButtonModule } from "../../components/button/button.module";
import { ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignService } from './sign.service';
import { ConfirmComponent } from './confirm/confirm.component';
import { ResetComponent } from './reset/reset.component';


@NgModule({
  declarations: [SignComponent, LoginComponent, RegisterComponent, ConfirmComponent, ResetComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  exports: [SignComponent],
  providers: [
    SignService
  ]
})
export class SignModule { }
