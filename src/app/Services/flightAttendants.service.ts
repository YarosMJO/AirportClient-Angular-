import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightAttendant } from '../Models/FlightAttendant';

@Injectable({
  providedIn: 'root'
})
export class FlightAttendantService {

  private uri = "http://localhost:51530/api/v1/flightAttendants/";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.uri);  
  }

  add(flightAttendant: FlightAttendant){
    return this.http.post(this.uri, flightAttendant);
  }

  get(id:number){
    return this.http.get(this.uri + id);        
  } 

  delete(id:number) {
    return this.http.delete(this.uri + id);
  }

  update(id:number, flightAttendant:FlightAttendant) { 
    return this.http.put(this.uri + id, flightAttendant);
  }

}
