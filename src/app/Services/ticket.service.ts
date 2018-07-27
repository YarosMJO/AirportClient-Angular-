import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../Models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private uri = "http://localhost:51530/api/v1/tickets/";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.uri);  
  }

  add(ticket: Ticket){
    return this.http.post(this.uri, ticket);
  }

  get(id:number){
    return this.http.get(this.uri + id);        
  } 

  delete(id:number) {
    return this.http.delete(this.uri + id);
  }

  update(id:number, ticket:Ticket) { 
    return this.http.put(this.uri + id, ticket);
  }

}

