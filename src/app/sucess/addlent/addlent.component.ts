import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{SucessService } from '../sucess.service';
import{cloneDeep as loadashclonedeep} from 'lodash';
import {Router, ROUTES } from '@angular/router'
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-addlent',
  templateUrl: './addlent.component.html',
  styleUrls: ['./addlent.component.css']
})
export class AddlentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private sucessService:SucessService ,private routes:Router) { }
  message="";
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
      'columnname':'moneytaken',
      'columnHeading':'moneytaken',
      'columntype':'text'
    },
   
    {
      'columnname':'date',
      'columnHeading':'date',
      'columntype':'date'
    }
    ]
    lentdata = {
      "date": "",
      "id": null,
      "itemname": "",
      "metalname": "",
      "moneytaken": "",
      "pid": null,
      "status": "nottaken",
      "jama":"[]"
    }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.lentdata["pid"]=this.id;
  }
  savelent()
  {
    var falg=false;
    this.order.forEach(element => {
      if(this.lentdata[element.columnname]=== ""  )
      {
        this.message = "plese enter valid "+element.columnname;
        falg=true;
      }
    });
    if(!falg)
    {
      this.message="";
      falg=false;
      this.sucessService.addbake(this.lentdata).subscribe(
      )}
  }
}
