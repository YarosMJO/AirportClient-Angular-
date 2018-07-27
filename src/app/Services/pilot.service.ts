import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pilot } from '../Models/Pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  private uri = "http://localhost:51530/api/v1/pilots/";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.uri);  
  }

  add(pilot: Pilot){
    return this.http.post(this.uri, pilot);
  }

  get(id:number){
    return this.http.get(this.uri + id);        
  } 

  delete(id:number) {
    return this.http.delete(this.uri + id);
  }

  update(id:number, pilot:Pilot) { 
    return this.http.put(this.uri + id, pilot);
  }

}
