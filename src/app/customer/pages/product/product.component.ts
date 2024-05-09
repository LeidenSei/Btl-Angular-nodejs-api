import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'data-type';
import { data, param } from 'jquery';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  proInfo:any=[];
  productData:any|product;
  constructor(private productServiec:ProductServiceService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:any)=>{
      let id:any=param.get(['id'])
      console.log(id);
      this.productServiec.getOnlyPro(id).subscribe((data)=>{
        this.proInfo=data;
        this.productData=data
        
      })
    })
  }
  addToCart(){
    if(this.productData){
      if(!localStorage.getItem('user')){
        this.productServiec.localAddToCart(this.productData)
        this.router.navigateByUrl('/cart')
      }
    }
  }
  
}
