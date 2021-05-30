import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{SucessService } from '../sucess.service';
import{cloneDeep as loadashclonedeep} from 'lodash';
import {Router, ROUTES } from '@angular/router'
@Component({
  selector: 'app-editperson',
  templateUrl: './editperson.component.html',
  styleUrls: ['./editperson.component.css']
})
export class EditpersonComponent implements OnInit {

  constructor(private route:ActivatedRoute,private sucessService:SucessService ,private routes:Router) { }
  persondata=[];
  edittrue=true;
  message="";
  notvalid=true;
  order=[
  {
    'columnname':'name',
    'columnHeading':'Name'
  },
  {
    'columnname':'fname',
    'columnHeading':'Father Name'
    
  },
  {
    'columnname':'village',
    'columnHeading':'address'
  },
  {
    'columnname':'pincode',
    'columnHeading':'pincode'
  },
  {
    'columnname':'bookno',
    'columnHeading':'bookno'
  }
  ]
  @Input() PID;
  ngOnInit(): void {
   this.sucessService.person(this.PID).subscribe(
    res=>{
      this.persondata=loadashclonedeep(res['Data'][0]);
    }
  )
  }
  editperson()
  {
    this.edittrue = !this.edittrue
  }
  saveperson()
  {
    var falg=false;
    this.order.forEach(element => {
      if(this.persondata[element.columnname]=== "" || this.persondata[element.columnname]==undefined )
      {
        this.message = "plese enter valid "+element.columnname;
        falg=true;
      }
    });
    if(!falg)
    {
      this.message="";
      falg=false;
      this.sucessService.updateperson(this.persondata).subscribe(
      )}
  }
}
