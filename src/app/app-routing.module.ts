import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'acesso',
    pathMatch: 'full'
  },
  {
    path: 'acesso',
    loadChildren: () =>
    import("./pages/sign/sign.module").then((m) => m.SignModule),
  },
  {
    path: '',
    children: [
      {
        path: "login",
        loadChildren: () =>
          import("./pages/login/login.module").then((m) => m.LoginModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
