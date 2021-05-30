import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{SucessService } from '../sucess.service';
import{cloneDeep as loadashclonedeep} from 'lodash';
import {Router, ROUTES } from '@angular/router'
@Component({
  selector: 'app-editfin',
  templateUrl: './editfin.component.html',
  styleUrls: ['./editfin.component.css']
})
export class EditfinComponent implements OnInit {
  show=false;
  id;
  message="";
  notvalid=true;
  addjama=false;
  jamapush = {
    "date" : null,
    "money":null

  }
 findata;
  order=[
    {
      'columnname':'itemname',
      'columnHeading':'itemname',
      'columntype':'text'
    },
    {
      'columnname':'metalname',
      'columnHeading':'metalname',
      'columntype':'text'
    },
    {
      'columnname':'moneylent',
      'columnHeading':'moneylent',
      'columntype':'text'
    },
    {
      'columnname':'weight',
      'columnHeading':'weight',
      'columntype':'text'
    },
    {
      'columnname':'sno',
      'columnHeading':'sno',
      'columntype':'text'
    },
    {
      'columnname':'bagno',
      'columnHeading':'bagno',
      'columntype':'text'
    },
    {
      'columnname':'dategiven',
      'columnHeading':'dategiven',
      'columntype':'date'
    }
    ]
  constructor(private route:ActivatedRoute,private sucessService:SucessService ,private routes:Router) { }
  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
   this.sucessService.finance(this.id).subscribe(
    res=>{
      this.findata=loadashclonedeep(res['Data'][0]);
      this.findata.jama = JSON. parse(this.findata.jama);
      this.show=true;
    }
  )
  }
  savelent()
  {
    var falg=false;
    this.order.forEach(element => {
      if(this.findata[element.columnname]=== ""  )
      {
        this.message = "plese enter valid "+element.columnname;
        falg=true;
      }
    });
    if(this.addjama)
    {
      if(this.jamapush.date != null && this.jamapush.money != null)
      {
        this.findata.jama.push(this.jamapush);
      }
    }
    this.findata.jama =  JSON. stringify(this.findata.jama);
    if(!falg)
    {
      this.message="";
      falg=false;
  
      this.sucessService.updatefin(this.findata).subscribe(
        res=>{
          if(res['Data']=="sucess")
          {
            
            this.routes.navigateByUrl('/sucess/'+this.findata.pid);
          }
        }
      )}
  }
  
  jama()
  {
    this.addjama=true;
  }
}
