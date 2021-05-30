import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import {AuthService} from '../auth.service';
import {Router, ROUTES } from '@angular/router';
import {MatFormFieldControl} from'@angular/material/form-field';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  constructor(private authservices:AuthService,private routes:Router ) { }
  hide=true;
  email="";
  password="";
  ngOnInit(): void {
    
  }
  auth()
  {
    this.authservices.login(this.email,this.password).subscribe(
      res=>{

        if (res) {
          localStorage.setItem('jwt', JSON.stringify(res));
          this.routes.navigateByUrl('/sucess');
      }
      }
    )
  }
}
