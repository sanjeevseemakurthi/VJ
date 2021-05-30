import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import {Router, ROUTES } from '@angular/router';
@Component({
  selector: 'app-lent',
  templateUrl: './lent.component.html',
  styleUrls: ['./lent.component.css']
})
export class LentComponent implements OnInit {

  constructor(private routes:Router,private route:ActivatedRoute) { }
 id;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }
  

}
