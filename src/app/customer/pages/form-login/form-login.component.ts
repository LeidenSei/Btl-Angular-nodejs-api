import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  loginCus=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  });
  constructor(private customerService:CustomerService,private router:Router,private buidler:FormBuilder){}
  onSubmit(){
    console.log(this.loginCus.value);
    
    this.customerService.loginCustomer(this.loginCus.value).subscribe((data)=>{
      if(data){
        console.log(data);
        
        localStorage.setItem('customer',data.name)
        alert('Login successfully')
        window.location.href=""
      }
    },(err)=>{
      alert('Invalid information')
    })
  }
}
