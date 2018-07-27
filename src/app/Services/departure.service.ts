import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departure } from '../Models/Departure';

@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  private uri = "http://localhost:51530/api/v1/departures/";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.uri);  
  }

  add(departure: Departure){
    return this.http.post(this.uri, departure);
  }

  get(id:number){
    return this.http.get(this.uri + id);        
  } 

  delete(id:number) {
    return this.http.delete(this.uri + id);
  }

  update(id:number, departure:Departure) { 
    return this.http.put(this.uri + id, departure);
  }

}
