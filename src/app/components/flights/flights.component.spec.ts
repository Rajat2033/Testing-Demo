import { ComponentFixture, TestBed, tick, fakeAsync, async } from '@angular/core/testing';
import { FlightsComponent } from './flights.component';
import { FlightService } from 'src/app/service/flight.service';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Flights } from 'src/app/model/Flights';


describe('FlightServiceComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;
  let flightService: FlightService;
  let router: Router;
  let formData: any; 

  let airline;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightsComponent],
      imports: [RouterTestingModule,HttpClientModule,FormsModule],
      providers: [FlightService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    flightService = TestBed.inject(FlightService);
    router = TestBed.inject(Router);
    formData = {
      flightNumber: 1,
      airline: "indigo",
      departureLocation: 'Nagpur',
      arrivalLocation: 'Pune',
      flightDate: new Date(),
      flightDesc: 'good',
      ticketPrice: 5000
    };
    fixture.detectChanges();
  });


  it('should be created', () => {
  expect(component).toBeTruthy();
  })
  it('should add new flight successfully', fakeAsync(() => {
    const formDataValue = {
      form: {
        value: {
          flightNumber: 1,
          airline: 'Indigo',
          departureLocation: 'Nagpur',
          arrivalLocation: 'Pune',
          flightDate: new Date(),
          flightDesc: 'good',
          ticketPrice: 5000
        }
      }
    };
    const mockResponse = {
      flightNumber: 1,
      airline: 'Indigo',
      departureLocation: 'Nagpur',
      arrivalLocation: 'Pune',
      flightDate: new Date(),
      flightDesc: 'good',
      ticketPrice: 5000
    };
  
    spyOn(console, 'log');
    spyOn(window, 'alert');
  
    spyOn(flightService, 'addNewFlights').and.returnValue(of(mockResponse));
   
    component.addFlight(formDataValue);
    expect(flightService.addNewFlights).toHaveBeenCalledWith(formDataValue.form.value);
    fixture.detectChanges();
    tick();
    alert("Run success");
    // expect(console.log).toHaveBeenCalled();
    // expect(window.alert).toHaveBeenCalledWith('New Flight Added Successfully');
  }));
  


  it('should navigate to update page', () => {
    spyOn(router, 'navigate');
    const flightNumber = 123; 
    component.updateFlight(flightNumber);
    expect(router.navigate).toHaveBeenCalledWith(['/update/' + flightNumber]);
  });
  

  it('should delete flight successfully', () => {
    const flightNumber = 123; 
    spyOn(flightService, 'deleteFlight').and.returnValue(of("delete"));
    spyOn(window, 'alert'); 
    component.deleteFlight(flightNumber); 
    expect(flightService.deleteFlight).toHaveBeenCalledWith(flightNumber);
    expect(window.alert).toHaveBeenCalledWith('Flight with Flight Number ' + flightNumber + ' is deleted');
  });
  
});


