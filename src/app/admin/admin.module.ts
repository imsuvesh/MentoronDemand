import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AdminComponent } from './Admin.component';


@NgModule({
  declarations: [
  
    AdminComponent
   
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AppModule { }
