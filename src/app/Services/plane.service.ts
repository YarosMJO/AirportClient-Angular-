import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plane } from '../Models/Plane';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  private uri = "http://localhost:51530/api/v1/planes/";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.uri);  
  }

  add(plane: Plane){
    return this.http.post(this.uri, plane);
  }

  get(id:number){
    return this.http.get(this.uri + id);        
  } 

  delete(id:number) {
    return this.http.delete(this.uri + id);
  }

  update(id:number, plane:Plane) { 
    return this.http.put(this.uri + id, plane);
  }

}
