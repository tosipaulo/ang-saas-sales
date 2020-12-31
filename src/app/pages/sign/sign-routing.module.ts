import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConfirmComponent } from "./confirm/confirm.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SignComponent } from "./sign.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "",
    component: SignComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'cadastro',
        component: RegisterComponent
      },
      {
        path: 'confirmar/:token',
        component: ConfirmComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignRoutingModule {}
