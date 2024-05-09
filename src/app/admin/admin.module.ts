import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MasterViewAdminComponent } from './master-view-admin/master-view-admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppProductComponent } from './pages/app-product/app-product.component';
import { HeaderComponent } from './pages/header/header.component';
@NgModule({
  declarations: [
    MasterViewAdminComponent,
    CategoryComponent,
    ProductComponent,
    AppProductComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
