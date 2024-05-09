import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators,FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { data } from 'jquery';
import { CategoryService } from 'src/app/services/category.service';
declare var $ : any;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  listCate:any;
  cate:any={};
  profileForm = new FormGroup({
    name: new FormControl('')
 })
 submitted= false;

  constructor(private categoryService:CategoryService,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.getList();
    this.profileForm= this.formBuilder.group(
      {
        name:['',Validators.required],
      }
    )
  }
  getList(){
    this.categoryService.getCate().subscribe((data)=>{
      this.listCate=data;
      
    })
  }
  addCate():void{
   if(this.profileForm.invalid){
    return;
   } else{
    this.submitted=true;
    this.categoryService.add(this.profileForm.value).subscribe((data)=>{
      console.log(data);
      this.getList();
   })
   }
  }
  getCate(){
    this.categoryService.getCate().subscribe((data)=>{
      this.listCate=data
    })
  }
  onReset():void{
    this.submitted=false;
    this.profileForm.reset()
  }
  deleteCate(id:any):void{
    alert(confirm('Are you sure you want to delete?'))
    this.categoryService.delete(id).subscribe((data)=>{
      this.getList()
      alert('Delete successfully')
    })
  }
  upDate():void{
    this.categoryService.update(this.cate.id,this.profileForm.value).subscribe((data)=>{
      $('#modelId').modal('hide')
      this.getList()
      alert('edit successfully')
    })
    
  }
  edit(id:any):void{
    $('#modelId').modal('show')
    this.categoryService.find(id).subscribe((data)=>{
      this.cate=data;
    })
    
  }
  
}

