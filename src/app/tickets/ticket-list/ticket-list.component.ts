import { Component, OnInit } from '@angular/core';
import { Pilot } from '../../Models/Pilot';
import { Ticket } from '../../Models/ticket';
import { TicketService } from '../../Services/ticket.service';


@Component({
  selector: 'app-tickets-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  providers: [TicketService]
})


export class TicketListComponent implements OnInit {

  Tickets: Array<Ticket>;
    public Price:number;
    public Number:number;


  constructor(public service: TicketService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((items:Array<Ticket>) => {
      this.Tickets = items; });
  }

  add(){
    let item = new Ticket(this.Price,this.Number);
    this.service.add(item).subscribe(result=>{
      this.Tickets.push(item);
      this.getAll();
    });
  }

 private delete(id: number): void {
    this.service.delete(id).subscribe( result => {
      
      this.getAll();
    });   
  }

   update(id:number,item: Ticket){
    this.service.update(id,item).subscribe(result=>{
      this.getAll();
    });
  }
}
