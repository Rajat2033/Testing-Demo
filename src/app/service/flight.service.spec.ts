import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FlightService } from './flight.service';
import { Flights } from '../model/Flights';

describe('FlightService', () => {
  let service: FlightService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightService]
    });
    service = TestBed.inject(FlightService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addNewFlights', () => {
    it('should add new flights', () => {
      const newFlights: Flights = {
        flightNumber: 1,
        airline: "indigo",
        departureLocation: 'Nagpur',
        arrivalLocation: 'Pune',
        flightDate: new Date(),
        flightDesc: 'good',
        ticketPrice: 5000
      };

      service.addNewFlights(newFlights).subscribe(result => {
        expect(result).toEqual(newFlights);
      });

      const req = httpMock.expectOne(`${service.ROOT_URL}/create/newflights`);
      expect(req.request.method).toBe('POST');
      req.flush(newFlights);
    });
  });

  describe('updateFlight', () => {
    it('should update existing flight', () => {
      const updatedFlights: Flights = {
        flightNumber: 1,
        airline: "indigo",
        departureLocation: 'Nagpur',
        arrivalLocation: 'Pune',
        flightDate: new Date(),
        flightDesc: 'good',
        ticketPrice: 5000
      };
      const flightNumber = 123;

      service.updateFlight(updatedFlights, flightNumber).subscribe(result => {
        expect(result).toEqual(updatedFlights);
      });

      const req = httpMock.expectOne(`${service.ROOT_URL}/update/flight/${flightNumber}`);
      expect(req.request.method).toBe('PUT');
      req.flush(updatedFlights);
    });
  });

  describe('deleteFlight', () => {
    it('should delete flight', () => {
      const flightNumber = 123;

      service.deleteFlight(flightNumber).subscribe(result => {
        expect(result).toEqual('Flight deleted successfully');
      });

      const req = httpMock.expectOne(`${service.ROOT_URL}/delete/flight/${flightNumber}`);
      expect(req.request.method).toBe('DELETE');
      req.flush('Flight deleted successfully');
    });
  });

  describe('getFlightByNumber', () => {
    it('should get flight by flight number', () => {
      const flightNumber = 123;
      const dummyFlight: Flights = {
        flightNumber: 1,
        airline: "indigo",
        departureLocation: 'Nagpur',
        arrivalLocation: 'Pune',
        flightDate: new Date(),
        flightDesc: 'good',
        ticketPrice: 5000
      };

      service.getFlightByNumber(flightNumber).subscribe(result => {
        expect(result).toEqual(dummyFlight);
      });

      const req = httpMock.expectOne(`${service.ROOT_URL}/get/flightbynumber/${flightNumber}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyFlight);
    });
  });

  describe('getAllFlights', () => {
    it('should get all flights', () => {
      const dummyFlights: Flights[] = [{
        flightNumber: 1,
        airline: "indigo",
        departureLocation: 'Nagpur',
        arrivalLocation: 'Pune',
        flightDate: new Date(),
        flightDesc: 'good',
        ticketPrice: 5000
      }];

      service.getAllFlights().subscribe(result => {
        expect(result).toEqual(dummyFlights);
      });

      const req = httpMock.expectOne(`${service.ROOT_URL}/getallflights`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyFlights);
    });
  });
});
