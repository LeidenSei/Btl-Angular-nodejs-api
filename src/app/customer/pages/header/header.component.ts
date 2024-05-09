import { product } from './../../../../../data-type';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router,private product:ProductServiceService){}
  cartItems=0
  ngOnInit(): void {
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.cartItems=JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItems=items.length
    })
  }
  
  acc=localStorage.getItem('customer');
  logOut(){
    localStorage.removeItem('customer')
    window.location.href=''
  }
}
