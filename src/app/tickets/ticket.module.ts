import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TicketDetailsComponent } from './ticket-detail/ticket-detail.component';
// import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketService } from '../Services/ticket.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    TicketDetailsComponent ,
    // TicketListComponent
    ],
    providers : [TicketService]
})
export class TicketModule { }


