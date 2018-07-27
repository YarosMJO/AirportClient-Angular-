import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { TicketService } from '../../Services/ticket.service';
import { Ticket } from '../../Models/ticket';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
  providers: [TicketService]
})

export class TicketDetailsComponent implements OnInit {

  ticket : Ticket;

  constructor(public service : TicketService,private route: ActivatedRoute){

    let id = route.snapshot.params.id;
    service.get(id).subscribe((data : Ticket) => {
      this.ticket = data;
          })
  }

  ngOnInit(){
  }
}
