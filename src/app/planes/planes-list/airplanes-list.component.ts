// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-airplanes-list',
//   templateUrl: './airplanes-list.component.html',
//   styleUrls: ['./airplanes-list.component.css']
// })
// export class PlanesListComponent implements OnInit {

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
