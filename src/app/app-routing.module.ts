import { authGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./customer/customer.module').then((m)=>m.CustomerModule)},
  {path:'admin',canActivate:[authGuard],loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)},
  {path:'login',component:LoginComponent},
  {path:'**',pathMatch:'full',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
