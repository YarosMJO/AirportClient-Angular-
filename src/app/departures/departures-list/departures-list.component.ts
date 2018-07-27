import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../../Services/departure.service';
import { Departure } from '../../Models/Departure';
import { Crew } from '../../Models/Crew';
import { Plane } from '../../Models/Plane';
import { CrewService } from '../../Services/crew.service';
import { PlaneService } from '../../Services/plane.service';

@Component({
  selector: 'app-departures-list',
  templateUrl: './departures-list.component.html',
  styleUrls: ['./departures-list.component.css']
})
export class DeparturesListComponent implements OnInit {

  Departures:Array<Departure>;

  public FlightNumber: number;
  public DepartureDate: Date;
  public Crew: number;
  public Plane: number;

  public newCrew: any;
  public newPlane: any;

  constructor(public service: DepartureService,public Crewservice: CrewService,public Planeservice: PlaneService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((items:Array<Departure>) => {
      alert("Departure");
      this.Departures = items; });
      
  }

  add(){
   this.Crewservice.get(this.Crew).subscribe(
      result =>{
          this.newCrew = result;
      });
      this.Crewservice.get(this.Plane).subscribe(
        result =>{
            this.newPlane = result;
        });

    let item = new Departure(this.FlightNumber,this.DepartureDate,this.newCrew,this.newPlane);
    this.service.add(item).subscribe(result=>{
      this.Departures.push(item);
      this.getAll();
    });
  }

  delete(id: number): void {
    this.service.delete(id).subscribe( result => {
      this.getAll();
    });   
  }

   update(id:number,item: Departure){
    this.service.update(id,item).subscribe(result=>{
      this.getAll();
    });
  }
}
