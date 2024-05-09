import { data } from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlCustomer='http://localhost:3000/api/customer'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  regis(customer:any):Observable<any>{
    return this.httpClient.post(urlCustomer,customer)
  }
  loginCustomer(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/customer/login',data)
  }
}
