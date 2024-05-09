import { ProductServiceService } from 'src/app/services/product-service.service';
import { product } from './../../../../../data-type';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData:any;
  listPro:any;
  constructor(private product:ProductServiceService,private router:Router){}
  ngOnInit(): void {
      this.getlist()
      console.log(this.cartData);
      
  }
  getlist(){
    this.cartData=localStorage.getItem('localCart')
    this.listPro=JSON.parse(this.cartData)
  }
  removeItem(id:any){
    if(confirm('Bạn chắc chắn muốn xóa sản phẩm này chứ')){
      this.product.removeItemFromCart(id);
      this.getlist();
      this.router.navigateByUrl('/cart')
    }
  }
}
