import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { data, param } from 'jquery';
import { CategoryService } from 'src/app/services/category.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cate-pro',
  templateUrl: './cate-pro.component.html',
  styleUrls: ['./cate-pro.component.css']
})
export class CateProComponent implements OnInit {
  listProCate:any=[];
  ListCate:any;
  constructor(private productService:ProductServiceService,private categoryService:CategoryService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
   this.route.paramMap.subscribe((param:any)=>{
    let id:any = param.get(['id'])
    console.log(id);
    this.productService.getCatePro(id).subscribe((data)=>{
      this.listProCate=data
      console.log(data);
      
    })
   })
  }
  getCate():void{
    this.categoryService.getCate().subscribe((data)=>{
      this.ListCate=data
    })
  }
}
