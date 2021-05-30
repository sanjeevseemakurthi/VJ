import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {SucessService} from '../sucess.service';
import {Router, ROUTES } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private sucessService:SucessService,private routes:Router) { }

  Name="";
  fname="";
  address="";
  phoneno;
  pincode;
  bookno;
  message="";
  notvalid=true;

  ngOnInit(): void {
  }
  addperson()
  {
      if(this.Name=="")
      {
        this.message=" Name should not be null";
        return ;
      }
      if(this.fname=="")
      {
        this.message=" Father Name should not be null";
        return ;
      }
      if(this.address=="")
      {
        this.message=" Address should not be null";
        return ;
      }
      if(this.phoneno == undefined)
      {
        this.message="  phone no should not be null";
        return ;
      }
      if(this.pincode == undefined)
      {
        this.message="  pincode should not be null";
        return ;
      }
      if(this.bookno == undefined)
      {
        this.message="  bookno should not be null";
        return ;
      }
      this.message="";
      let reqdata={
        "name":this.Name,
        "fname":this.fname,
        "village":this.address,
        "phoneno":this.phoneno,
        "pincode":this.pincode,
        "bookno":this.bookno
      }
      this.sucessService.newperson(reqdata).subscribe(
        res=>{
         this.routes.navigateByUrl('/sucess/'+res['Data'][0]['id']);
        }
      )
  }
}
