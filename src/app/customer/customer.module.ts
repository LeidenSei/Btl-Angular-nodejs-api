
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { MasterViewComponent } from './master-view/master-view.component';
import { MainComponent } from './pages/main/main.component';
import { ProductComponent } from './pages/product/product.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisComponent } from './pages/regis/regis.component';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CateProComponent } from './pages/cate-pro/cate-pro.component';
import { AllProComponent } from './pages/all-pro/all-pro.component';
import { CartComponent } from './pages/cart/cart.component';



@NgModule({
  declarations: [
    MasterViewComponent,
    MainComponent,
    ProductComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisComponent,
    FormLoginComponent,
    CateProComponent,
    AllProComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
