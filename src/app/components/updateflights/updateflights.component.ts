import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flights } from 'src/app/model/Flights';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-updateflights',
  templateUrl: './updateflights.component.html',
  styleUrls: ['./updateflights.component.css']
})
export class UpdateflightsComponent implements OnInit{
  flightNumber!:any;
  flight: Flights = {
    flightNumber: 0,
    airline: '',
    departureLocation: '',
    arrivalLocation: '',
    flightDate: new Date(),
    flightDesc: '',
    ticketPrice: 0
  };

  
  constructor(private route:ActivatedRoute,private flightService:FlightService)
  {

  }
  ngOnInit(): void {
   this.route.params.subscribe(params=>
    {
      console.log(params);
      this.flightNumber=params['flightNumber'];
      console.log(this.flightNumber);
    }
    )

    // this.flightService.getFlightByNumber(this.flightNumber).subscribe(data=>
    //   {

    //     console.log(data);
    //     this.flight=data;
    //     console.log(this.flight);
    //   })
  }

  updateFlight(formData: any) {
    if (formData && formData.form && formData.form.value) {
      this.flightService.updateFlight(formData.form.value, this.flightNumber).subscribe(data => {
        console.log(data);
        alert("Data got updated successfully");
      });
    } else {
      console.error("formData or formData.form.value is undefined");
      
    }
  }
  

  
}
