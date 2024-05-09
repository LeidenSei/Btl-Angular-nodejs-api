import { data } from 'jquery';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'data-type';

const urlProduct='http://localhost:3000/api/product';
const allCate='http://localhost:3000/api/product/cate';
const onlyPro='http://localhost:3000/api/product/only';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private httpClient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get(urlProduct);
  }
  addPro(product:any):Observable<any>{
    console.table(product)
    return this.httpClient.post(urlProduct,product)
  }
  delPro(id:any):Observable<any>{
    return this.httpClient.delete(urlProduct+'/'+id)
  }
  findPro(id:any):Observable<any>{
    return this.httpClient.get(urlProduct+'/'+id)
  }
  updatePro(id:any,product:any):Observable<any>{
    return this.httpClient.put(urlProduct+'/'+id,product)
  }
  getCatePro(id:any):Observable<any>{
    return this.httpClient.get(allCate+'/'+id)
  }
  getOnlyPro(id:any):Observable<any>{
    return this.httpClient.get(onlyPro+'/'+id)
  }
  cartData=new EventEmitter<any>
  localAddToCart(data:product){
    let cartData=[];
    let localCart=localStorage.getItem('localCart')
    if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([data]))
    } else{
      cartData=JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartData))
    }
    this.cartData.emit(cartData)
  }
  removeItemFromCart(id:any){
    let cartData=localStorage.getItem('localCart');
    if(cartData){
      let items:product[]=JSON.parse(cartData)
      items=items.filter((item:any)=>id!=item.id)
      localStorage.setItem('localCart',JSON.stringify(items))
      this.cartData.emit(items)
    }
  }
}
