import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flights } from 'src/app/model/Flights';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  [x: string]: any;
  flightList:Flights[]=[];
  searchInput!:any;
  flightdata!:Flights;
  constructor(private flightService:FlightService,private route:ActivatedRoute,private router:Router)
  {

  }
  ngOnInit(): void {
   this.flightService.getAllFlights().subscribe(data=>
    {

      console.log(data);
      this.flightList=data;
    })
  }

  // console.log(data);
      // formData.reset();
      // alert("New Flight Added Successfully");
  addFlight(formData:any)
  {
    this.flightService.addNewFlights(formData.form.value).subscribe((data)=>
    {
      
    })
  }

  updateFlight(flightNumber:number)
  {
    this.router.navigate(['/update/'+flightNumber]);
  }
  deleteFlight(flightNumber:number)
  {
    this.flightService.deleteFlight(flightNumber).subscribe(data=>
      {
        alert("Flight with Flight Number "+flightNumber+" is deleted");
      })
  }

  searchResult()
  {
    console.log(this.searchInput);
    this.flightService.getFlightByNumber(this.searchInput).subscribe((data)=>
    {
      this.flightdata=data;
    })
  }
}
 


