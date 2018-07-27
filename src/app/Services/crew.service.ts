import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crew } from '../Models/Crew';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  private uri = "http://localhost:51530/api/v1/crews/";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.uri);  
  }

  add(crew: Crew){
    return this.http.post(this.uri, crew);
  }

  get(id:number){
    return this.http.get(this.uri + id);        
  } 

  delete(id:number) {
    return this.http.delete(this.uri + id);
  }

  update(id:number, crew:Crew) { 
    return this.http.put(this.uri + id, crew);
  }

}
