// import { Component, OnInit } from '@angular/core';
// import { TicketService } from '../../Services/ticket.service';
// import { Ticket } from '../../Models/ticket';
// @Component({

//   templateUrl: './ticket-list.component.html',
//   styleUrls: ['./ticket-list.component.css'],
//   providers : [TicketService]
// })
// export class TicketListComponent implements OnInit {


//   constructor(public service: PilotService) {}

//   ngOnInit() {
//     this.getAll();
//   }

//   getAll() {
//     this.service.getAll().subscribe((items:Array<Pilot>) => {
//       this.Pilots = items; });
//   }

//   add(){
//     let item = new Pilot(this.Name,this.Surname,this.Birthday,this.Experience);
//     this.service.add(item).subscribe(result=>{
//       this.Pilots.push(item);
//       this.getAll();
//     });
//   }

//   delete(id: number): void {
//     this.service.delete(id).subscribe( result => {
//       this.getAll();
//     });   
//   }

//    update(id:number,item: Pilot){
//     this.service.update(id,item).subscribe(result=>{
//       this.getAll();
//     });
//   }

// }
