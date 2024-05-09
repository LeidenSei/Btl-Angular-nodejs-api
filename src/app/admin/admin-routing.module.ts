import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewAdminComponent } from './master-view-admin/master-view-admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { AppProductComponent } from './pages/app-product/app-product.component';

const routes: Routes = [
  {path:'',component:MasterViewAdminComponent,children:[
    {path:'category',component:CategoryComponent},
    {path:'product',component:ProductComponent},
    {path:'addPro',component:AppProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
