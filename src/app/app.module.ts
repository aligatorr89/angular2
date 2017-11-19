import {      NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {   FormsModule }	from '@angular/forms';
import {    HttpModule } from '@angular/http';

import {   AppComponent }  from './app.component';
import { IndexComponent }  from './components/index.component';
import {  HomeComponent }  from './components/home.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, IndexComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
