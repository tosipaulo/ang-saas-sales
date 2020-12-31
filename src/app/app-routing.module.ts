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
    path: 'clientes',
    loadChildren: () =>
    import("./pages/clients/clients.module").then((m) => m.ClientsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
