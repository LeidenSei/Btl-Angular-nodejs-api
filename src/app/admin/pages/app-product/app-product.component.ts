import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { CategoryService } from 'src/app/services/category.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
declare var $ : any;

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css']
})
export class AppProductComponent {
  listCate:any;
  listPro:any;
  prod:any={};
  file:any;
  preview:any;
  profileProd = new FormGroup({
    name: new FormControl(''),
    price:new FormControl(''),
    category_id:new FormControl('')
 })
  constructor(private productService:ProductServiceService,private categoryService:CategoryService,private router: Router){}
  ngOnInit(): void {
    this.getListPro()
    this.getCate()
  }
  getListPro(){
    this.productService.getAll().subscribe((data)=>{
      this.listPro=data;
    })
    }
  getCate(){
    this.categoryService.getCate().subscribe((data)=>{
      this.listCate=data
      console.log(this.listCate);
      
    })
  }
  addProd():void{
    console.log(this.profileProd.value);
    let name:any=this.profileProd.value.name;
    let price:any= this.profileProd.value.price;
    let category_id:any = this.profileProd.value.category_id;
    if(this.file){
      const formData = new FormData();
      formData.append('image',this.file,this.file.name);
      formData.append('name',name);
      formData.append('price',price);
      formData.append('category_id',category_id);
      this.productService.addPro(formData).subscribe((data)=>{
        if(data){
          alert('Added successfully product')
          this.router.navigate(["admin/product"]);
        }
      })
    }
  }
  uploadFile(event:any){
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file)
    reader.onload = (e:any)=>{
    this.preview = e.target.result; 
    }
    }
   
}
