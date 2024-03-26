import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './components/flights/flights.component';
import { UpdateflightsComponent } from './components/updateflights/updateflights.component';

const routes: Routes = [
  {
    path:'',component:FlightsComponent
  },
  {
    path:'update/:flightNumber',component:UpdateflightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
