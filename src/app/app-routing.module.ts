import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{SucessComponent} from './sucess/sucess/sucess.component'
import { BothComponent } from './sucess/both/both.component'
import { LentComponent } from './sucess/lent/lent.component';
import {FinanceComponent } from './sucess/finance/finance.component';
import { PersonComponent } from './sucess/person/person.component'
import {AddfinComponent} from './sucess/addfin/addfin.component';
import {AddlentComponent} from './sucess/addlent/addlent.component';
import {EditfinComponent} from './sucess/editfin/editfin.component';
import {EditlentComponent } from './sucess/editlent/editlent.component'
import { SpinnerComponent } from './shared/spinner/spinner.component'
const routes: Routes = [
  {
    path: 'sucess',
    component : SucessComponent
  },
  {
    path: 'sucess/personadd',
    component : PersonComponent
  },
  {
    path: 'sucess/:id',
    component : BothComponent
  },
  {
    path: 'sucess/lent/:id',
    component : EditlentComponent
  },
  {
    path: 'sucess/finance/:id',
    component : EditfinComponent
  },
  {
    path: 'sucess/addlent/:id',
    component : AddlentComponent
  },
  {
    path: 'sucess/addfin/:id',
    component : AddfinComponent
  },
  {
    path: 'spinner',
    component : SpinnerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
