import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateflightsComponent } from './updateflights.component';
import { FlightService } from 'src/app/service/flight.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Flights } from 'src/app/model/Flights';

describe('UpdateFlightsComponent', () => {
  let component: UpdateflightsComponent;
  let fixture: ComponentFixture<UpdateflightsComponent>;
  let flightServiceSpy: jasmine.SpyObj<FlightService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('FlightService', ['updateFlight']);
    await TestBed.configureTestingModule({
      declarations: [UpdateflightsComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        { provide: FlightService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateflightsComponent);
    component = fixture.componentInstance;
    flightServiceSpy = TestBed.inject(FlightService) as jasmine.SpyObj<FlightService>;
  });

  it('should be updated', () => {
    expect(component).toBeTruthy();
  });

  
  // it('should update flight successfully', () => {
  //   const formDataValue = {
  //     form: {
  //       value: {
  //         flightNumber: 1,
  //         airline: '',
  //         departureLocation: 'Nagpur',
  //         arrivalLocation: 'Pune',
  //         flightDate: new Date(),
  //         flightDesc: 'good',
  //         ticketPrice: 5000,
  //       }
  //     }
  //   };
  
  //   const flightNumber = 123;
  
  //   if (!flightServiceSpy.updateFlight) {
  //     spyOn(flightServiceSpy, 'updateFlight').and.returnValue(of(formDataValue.form.value));
  //   }
  
  //   component.updateFlight(formDataValue);
  
  //   expect(flightServiceSpy.updateFlight).toHaveBeenCalledWith(formDataValue.form.value, flightNumber);
  // });
});
