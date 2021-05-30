import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule}from './auth/auth.module'
import { SharedModule} from './shared/shared.module'
import { from } from 'rxjs';
import {JwttokeninspectorService} from './jwttokeninspector.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { SucessModule } from './sucess/sucess.module';
import {MatCardModule,} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatTableModule,
    MatCardModule,
    MatIconModule ,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    SucessModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwttokeninspectorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
