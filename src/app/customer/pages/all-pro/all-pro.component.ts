import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { data } from 'jquery';
import { CategoryService } from 'src/app/services/category.service';
import { ProductServiceService } from 'src/app/services/product-service.service';


@Component({
  selector: 'app-all-pro',
  templateUrl: './all-pro.component.html',
  styleUrls: ['./all-pro.component.css']
})
export class AllProComponent implements OnInit {
  listPro:any;
  Prod6:any;
  prod:any={};
  cate:any;
  profileProd = new FormGroup({
    name: new FormControl(''),
    price:new FormControl(''),
    image:new FormControl(''),
    category_id:new FormControl('')
 })
 constructor(private productService:ProductServiceService,private categoryService:CategoryService){}
 ngOnInit(): void {
  this.getList()
}
getList(){
  this.productService.getAll().subscribe((data)=>{
    this.listPro=data;
  })
  }
addProd():void{
  console.log(this.profileProd.value);
  
  this.productService.addPro(this.profileProd.value).subscribe((data)=>{
    this.getList()
  })
}
}
