import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flights } from '../model/Flights';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }

  ROOT_URL:string="http://localhost:8291/api/v1/flights";

  addNewFlights(flights:Flights):Observable<Flights>
  {
    return  this.http.post<Flights>(this.ROOT_URL+"/create/newflights",flights);
  }

  updateFlight(flights:Flights,flightNumber:number):Observable<Flights>
  {
    return this.http.put<Flights>(this.ROOT_URL+`/update/flight/${flightNumber}`,flights);
  }

  deleteFlight(flightNumber:number):Observable<string>
  {
    return this.http.delete<string>(this.ROOT_URL+`/delete/flight/${flightNumber}`);
  }

  getFlightByNumber(flightNumber:number):Observable<Flights>
  {
    return this.http.get<Flights>(this.ROOT_URL+`/get/flightbynumber/${flightNumber}`);
  }

  getAllFlights():Observable<Flights[]>
  {
    return this.http.get<Flights[]>(this.ROOT_URL+"/getallflights");
  }
}
