import { LoginComponent } from './../../../login/login.component';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { CustomerService } from 'src/app/services/customer.service';
import { validatePass } from './validatePass';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})

export class RegisComponent {
  profileCustomer=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('')
  },
  {
    validators:validatePass 
  }
  )
  constructor(private customerService:CustomerService,private router:Router){}
  
  onSubmit(){
    this.customerService.regis(this.profileCustomer.value).subscribe((data)=>{
      if(data){
        alert('Register successfully')
        this.router.navigateByUrl('/login-customer');
      }
    })
  }

}
