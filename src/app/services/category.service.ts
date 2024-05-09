import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlApi = 'http://localhost:3000/api/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  
  getCate():Observable<any>{
    return this.httpClient.get(urlApi);
  }
  add(product:any):Observable<any>{
    return this.httpClient.post(urlApi,product);
  }
  delete(id:any):Observable<any>{
    return this.httpClient.delete(urlApi+'/'+ id)
  }
  find(id:any):Observable<any>{
    return this.httpClient.get(urlApi+'/'+id)
  }
  update(id:any,product:any):Observable<any>{
    return this.httpClient.put(urlApi+'/'+id,product)
  }
}
