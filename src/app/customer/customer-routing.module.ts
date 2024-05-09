import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view/master-view.component';
import { MainComponent } from './pages/main/main.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisComponent } from './pages/regis/regis.component';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { AllProComponent } from './pages/all-pro/all-pro.component';
import { CateProComponent } from './pages/cate-pro/cate-pro.component';
import { CartComponent } from './pages/cart/cart.component';
ProductComponent
const routes: Routes = [
  {path:'',component:MasterViewComponent,children:[
    {path:'',component:MainComponent,children:[
      {path:'',component:AllProComponent},
      {path:'catePro/:id',component:CateProComponent}
    ]},
    {path:'product/:id',component:ProductComponent},
    {path:'login-customer',component:LoginComponent,children:[
      {path:'',component:FormLoginComponent},
      {path:'regis',component:RegisComponent}
    ]},
    {path:'regis',component:RegisComponent},
    {path:'allPro',component:AllProComponent},
    {path:'cart',component:CartComponent},
    {path:'loginCus',component:FormLoginComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
