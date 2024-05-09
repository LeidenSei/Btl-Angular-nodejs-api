import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data, param } from 'jquery';
import { CategoryService } from 'src/app/services/category.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
declare var $ : any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  listPro:any;
  prod:any={};
  file:any;
  preview:any;
  listCate:any;
  image:any
  profileProd = new FormGroup({
    name: new FormControl(''),
    price:new FormControl(''),
    category_id:new FormControl('')
 })
  constructor(private productService:ProductServiceService,private categoryService:CategoryService,private router: Router,private activeRouter:ActivatedRoute){}
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
        this.listCate=data;
        
      })
    }
 
    deletePro(id:any):void{
      if(confirm('Are you sure you want to delete?')){
        this.productService.delPro(id).subscribe((data)=>{
          this.getListPro();
        })
      }
    }
    editPro(id:any):void{
      $('#modelId').modal('show')
        this.productService.findPro(id).subscribe((data)=>{
          this.prod=data;
          console.log(data);
          
          this.image=this.prod.image
          console.log(data);
          
          
      })
    
    }
    selectFile(event:any){
      this.file = event.target.files[0];
      
      const reader = new FileReader();
      reader.readAsDataURL(this.file)
      reader.onload = (e:any)=>{
      this.preview = e.target.result; 
      this.image=this.preview
      }
      }
    
    updatePro():void{
      let name:any;
      let price:any;
      let category_id:any;
      console.log(this.prod.category_id);
      
      if(this.profileProd.value.name==""){
        name=this.prod.name;
      }else{
        name=this.profileProd.value.name
      }
      if(this.profileProd.value.price==""){
        price=this.prod.price;
      }else{
        price=this.profileProd.value.price
      }
     
      if(this.profileProd.value.category_id==""){
        category_id=this.prod.category_id
      }else{
        category_id=this.profileProd.value.category_id;
      }
        
      const formDataN = new FormData();
        if(this.file){
          formDataN.append('image',this.file,this.file.name);
        } else{
          formDataN.append('image',this.image);
        }
        formDataN.append('name',name);
        formDataN.append('price',price);
        formDataN.append('category_id',category_id);
        console.log(formDataN);
        
        this.productService.updatePro(this.prod.id,formDataN).subscribe((data)=>{
          if(data){
            $('#modelId').modal('hide');
            this.getListPro();
            alert('Add successfully product')
          }
        })
      }
}