import { Component, OnInit } from '@angular/core';
import { CrewService } from '../../Services/crew.service';
import { Crew } from '../../Models/Crew';
import { Pilot } from '../../Models/Pilot';
import { FlightAttendant } from '../../Models/FlightAttendant';


@Component({
  selector: 'app-crew-list',
  templateUrl: './crews-list.component.html',
  styleUrls: ['./crews-list.component.css'],
  providers: [CrewService]
})


export class CrewsListComponent implements OnInit {

  Crews: Array<Crew>;
    Pilot:Pilot;
    FlightAttendants:FlightAttendant[];


  constructor(public service: CrewService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((items:Array<Crew>) => {
      this.Crews = items; });
  }

  add(){
    let item = new Crew(this.Pilot,this.FlightAttendants);
    this.service.add(item).subscribe(result=>{
      this.Crews.push(item);
      this.getAll();
    });
  }

 private delete(id: number): void {
    this.service.delete(id).subscribe( result => {
      
      this.getAll();
    });   
  }

   update(id:number,item: Crew){
    this.service.update(id,item).subscribe(result=>{
      this.getAll();
    });
  }
}
