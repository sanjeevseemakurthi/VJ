import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SucessService } from '../sucess.service';
import{cloneDeep as loadashclonedeep} from 'lodash';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {Router, ROUTES } from '@angular/router'
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})

export class SucessComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['name', 'fname', 'village', 'phoneno','actions'];
  search;
  constructor(private sucessService:SucessService,private routes:Router) { }

  ngOnInit(): void {
    this.sucessService.peopledata().subscribe(
      res=>{
      if (res) {
       this.dataSource=loadashclonedeep(res['Data']);
       this.dataSource=new MatTableDataSource(this.dataSource);
      }
    })
  }
  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  editclick(event)
  {
    this.routes.navigateByUrl('/sucess/'+event.id);
  }
  addperson()
  {
    this.routes.navigateByUrl('/sucess/personadd');
  }
}
