import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlaneType } from '../Models/PlaneType';

@Injectable({
  providedIn: 'root'
})
export class PlaneTypeService {

  private uri = "http://localhost:51530/api/v1/planeTypes/";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.uri);  
  }

  add(planeType: PlaneType){
    return this.http.post(this.uri, planeType);
  }

  get(id:number){
    return this.http.get(this.uri + id);        
  } 

  delete(id:number) {
    return this.http.delete(this.uri + id);
  }

  update(id:number, planeType:PlaneType) { 
    return this.http.put(this.uri + id, planeType);
  }

}
