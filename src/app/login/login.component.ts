import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl,FormGroup, Validators,FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  profileForm=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  });
  constructor(private authService:AuthService,private router:Router,private builder:FormBuilder){}
  
  onSubmit(){
    
    this.authService.login(this.profileForm.value).subscribe((data)=>{
      if(data){
        
        localStorage.setItem("auth",data.email)
        window.location.href="admin"
        alert('Login successfully')
      }
    },(err)=>{
      alert('Invalid information')
    })
  }
}
