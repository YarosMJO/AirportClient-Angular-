// import { Component, OnInit } from '@angular/core';
// import { FlightService } from '../../Services/flight.service';
// import { Flight } from '../../Models/Flight';

// @Component({
//   selector: 'app-flights-list',
//   templateUrl: './flights-list.component.html',
//   styleUrls: ['./flights-list.component.css'],
//   providers: [FlightService]
// })
// export class FlightsListComponent implements OnInit {
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


 