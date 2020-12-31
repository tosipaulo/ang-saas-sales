import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from './sign.component';
import { SignRoutingModule } from './sign-routing.module';

import { InputModule } from "../../components/input/input.module";
import { ButtonModule } from "../../components/button/button.module";
import { ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [SignComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule
  ],
  exports: [SignComponent]
})
export class SignModule { }
