import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }from '@angular/common/http';
import { AppConstants }from '../app-constants'

@Injectable({
  providedIn: 'root'
})
export class SucessService {
  private baseurl= AppConstants.url;
  constructor(private httpclient : HttpClient) { }
  peopledata()
  {
    return this.httpclient.get(this.baseurl+'/peopledata');
  }
  personallfinance(id)
  {
    let data= {
      "id":id,
      }
    return this.httpclient.post(this.baseurl+'/personallfinance',data);
  }
  personallbake(id)
  {
    let data= {
      "id":id,
      }
    return this.httpclient.post(this.baseurl+'/personallbake',data);
  }
  person(id)
  {
    let data= {
      "id":id,
      }
    return this.httpclient.post(this.baseurl+'/person',data);
  }
  finance(id)
  {
    let data= {
      "id":id,
      }
    return this.httpclient.post(this.baseurl+'/finance',data);
  }
  bake(id)
  {
    let data= {
      "id":id,
      }
    return this.httpclient.post(this.baseurl+'/bake',data);
  }
  newperson(Data)
  {
    return this.httpclient.post(this.baseurl+'/newperson',Data);
  }
  updateperson(Data)
  {
    return this.httpclient.post(this.baseurl+'/updateperson',Data);
  }
  updatefin(Data)
  {
    return this.httpclient.post(this.baseurl+'/updatefin',Data);
  }
  updatelen(Data)
  {
    return this.httpclient.post(this.baseurl+'/updatelen',Data);
  }
  addbake(Data)
  {
    return this.httpclient.post(this.baseurl+'/newbake',Data);
  }
  addfinance(Data)
  {
    return this.httpclient.post(this.baseurl+'/newfinance',Data);
  }
}
