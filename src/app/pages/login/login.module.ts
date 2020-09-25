import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, LoginRoutingModule],
  exports: [LoginComponent, SignUpComponent],
})
export class LoginModule {}
