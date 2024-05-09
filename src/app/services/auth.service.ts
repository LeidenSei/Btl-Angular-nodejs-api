import { data } from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCilent:HttpClient) { }
  login(data:any):Observable<any>{
    return this.httpCilent.post('http://localhost:3000/api/login',data)
  }
}
