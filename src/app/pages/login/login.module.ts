import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";

import { InputModule } from "../../components/input/input.module";
import { ButtonModule } from "../../components/button/button.module";
import { ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
