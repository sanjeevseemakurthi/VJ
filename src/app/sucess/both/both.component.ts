import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import{SucessService } from '../sucess.service';
import{cloneDeep as loadashclonedeep} from 'lodash';
import {Router, ROUTES } from '@angular/router'
@Component({
  selector: 'app-both',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.css']
})
export class BothComponent implements OnInit {
  spinnerflag=true;
  id;
  displayedColumnsfin: string[] = ['metalname','itemname','weight', 'moneylent', 'dategiven','actions'];
  displayedColumnslen: string[] = ['metalname','itemname', 'moneytaken', 'status', 'date','actions'];
  dataSourcefin=[];
  dataSourcelen=[];
  persondata=[]
  constructor(private route:ActivatedRoute,private sucessService:SucessService ,private routes:Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sucessService.personallfinance(this.id).subscribe(
      res=>{
        this.dataSourcefin=loadashclonedeep(res['Data']);

      }
    )
    this.sucessService.personallbake(this.id).subscribe(
      res=>{
        this.dataSourcelen=loadashclonedeep(res['Data']);
        
      }
    )
    this.sucessService.person(this.id).subscribe(
      res=>{
        this.persondata=loadashclonedeep(res['Data'][0]);
        this.spinnerflag=false
      }
    )

  }
  editclicklen(element){
    this.routes.navigateByUrl('/sucess/lent/'+element.id);
  }
  editclickfin(element){
    this.routes.navigateByUrl('/sucess/finance/'+element.id);
  }
  addclicklent()
  {
    this.routes.navigateByUrl('/sucess/addlent/'+this.id);
  }
  addclickfin()
  {
    this.routes.navigateByUrl('/sucess/addfin/'+this.id);
  }

}
