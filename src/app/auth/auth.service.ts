import { Injectable } from '@angular/core';
import { AppConstants }from '../app-constants'
import { HttpClient,HttpHeaders }from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseurl= AppConstants.url;
   
  constructor(private httpclient : HttpClient) { }
  login(email,password)
  {
    const httpheader = new HttpHeaders({
      'content-type':'application/json'
    })
     let data= {
      "username":email,
      "password":password
      }
    return this.httpclient.post(this.baseurl+'/login_check',data,{headers:httpheader});
  }
}
