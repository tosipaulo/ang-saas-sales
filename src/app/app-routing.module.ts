import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guard/auth-guard.service";
import { ConfirmComponent } from "./pages/sign/confirm/confirm.component";
import { LoginComponent } from "./pages/sign/login/login.component";
import { RegisterComponent } from "./pages/sign/register/register.component";
import { ResetComponent } from "./pages/sign/reset/reset.component";
import { SignComponent } from "./pages/sign/sign.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'acesso/login',
    pathMatch: 'full'
  },
  {
    path: 'acesso',
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
  },
  {
    path: 'clientes',
    loadChildren: () =>
    import("./pages/clients/clients.module").then((m) => m.ClientsModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
