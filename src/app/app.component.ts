import { Component, OnChanges, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { from } from 'rxjs';
import { AuthComponent } from '../app/auth/auth/auth.component';
import { ActivatedRoute } from '@angular/router';
import {Router, ROUTES } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{
  title = 'VJ';
  authflag=false;
  screenWidth;
  screenHeight;
  constructor(private routes:Router,public dialog:MatDialog ,private route:ActivatedRoute) {}
  ngOnInit(){
  
  }
  ngOnChanges(){
  
  }
  addItem(newItem: boolean) {
    this.authflag = newItem;
  }
  openDialog() {
    const dialogRef = this.dialog.open(AuthComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  gotohomepage()
  {
    this.routes.navigateByUrl('/sucess');
  }
}
