import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../Models/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private uri = "http://localhost:51530/api/v1/flights/";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.uri);  
  }

  add(flight: Flight){
    return this.http.post(this.uri, flight);
  }

  get(id:number){
    return this.http.get(this.uri + id);        
  } 

  delete(id:number) {
    return this.http.delete(this.uri + id);
  }

  update(id:number, flight:Flight) { 
    return this.http.put(this.uri + id, flight);
  }

}
