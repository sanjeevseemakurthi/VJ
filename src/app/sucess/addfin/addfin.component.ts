import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import{SucessService } from '../sucess.service';
import{cloneDeep as loadashclonedeep} from 'lodash';
import {Router, ROUTES } from '@angular/router'
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-addfin',
  templateUrl: './addfin.component.html',
  styleUrls: ['./addfin.component.css']
})
export class AddfinComponent implements OnInit {

  constructor(private route:ActivatedRoute,private sucessService:SucessService ,private routes:Router) { }
  message="";
  spinnerflag=false;
  id="";
  notvalid=true;
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
    findata = {
      "moneylent": "",
      "id": null,
      "itemname": "",
      "metalname": "",
      "pid": null,
      "status": "nottaken"  ,
      "sno":"",
      "datetaken":null,
      "dategiven":null,
      "weight":"",
      "bagno":"",
      "jama":"[]"
    }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.findata["pid"]=this.id;
  }
  savelent()
  {
    this.spinnerflag=true;
    var falg=false;
    this.order.forEach(element => {
     
      if(this.findata[element.columnname]=== ""  )
      {
        this.message = "plese enter valid "+element.columnname;
        falg=true;
      }
    });
    if(!falg)
    {
      this.message="";
      falg=false;
      this.sucessService.addfinance(this.findata).subscribe(
        res=>
        {
          this.spinnerflag=false;
          this.routes.navigateByUrl('/sucess/'+this.id);

        }
      )}
  }
}
