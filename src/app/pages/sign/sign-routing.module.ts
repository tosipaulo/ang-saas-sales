import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConfirmComponent } from "./confirm/confirm.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ResetComponent } from "./reset/reset.component";
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
        path: 'confirmar',
        redirectTo: 'login'
      },
      {
        path: 'confirmar/:token',
        component: ConfirmComponent
      },
      {
        path: 'resetar',
        component: ResetComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignRoutingModule {}
