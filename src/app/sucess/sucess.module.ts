import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucessComponent } from './sucess/sucess.component';
import { LentComponent } from './lent/lent.component';
import { FinanceComponent } from './finance/finance.component';
import {MatCardModule,} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule  } from "@angular/forms";
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { from } from 'rxjs';
import { BothComponent } from './both/both.component';
import { PersonComponent } from './person/person.component';
import { AddlentComponent } from './addlent/addlent.component';
import { AddfinComponent } from './addfin/addfin.component';
import { EditpersonComponent} from './editperson/editperson.component';
import { EditfinComponent } from './editfin/editfin.component';
import { EditlentComponent } from './editlent/editlent.component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [SucessComponent, LentComponent, FinanceComponent, BothComponent, PersonComponent, AddlentComponent, AddfinComponent, EditpersonComponent, EditfinComponent, EditlentComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule
  ],
})
export class SucessModule { }
