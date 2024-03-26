import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightsComponent } from './components/flights/flights.component';
import { UpdateflightsComponent } from './components/updateflights/updateflights.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    UpdateflightsComponent
    
  ],
  imports: [
    HttpClientTestingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
