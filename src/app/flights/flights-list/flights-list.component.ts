import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../Services/flight.service';
import { Flight } from '../../Models/Flight';


@Component({
  selector: 'app-pilots-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css'],
  providers: [FlightService]
})


export class FlightsListComponent implements OnInit {

  Flights: Array<Flight>;
  public DeparturePoint: string;
  public DepartureTime: Date;
  public Destination: string;
  public ArrivalTime: Date;


  constructor(public service: FlightService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((items:Array<Flight>) => {
      this.Flights = items; });
  }

  add(){
    // let item = new Flight(this.DeparturePoint,this.DepartureTime,this.Destination,this.ArrivalTime);
    // this.service.add(item).subscribe(result=>{
    //   this.Flights.push(item);
    //   this.getAll();
    // });
  }

  delete(id: number): void {
    this.service.delete(id).subscribe( result => {
      
      this.getAll();
    });   
  }

   update(id:number,item: Flight){
    this.service.update(id,item).subscribe(result=>{
      this.getAll();
    });
  }
}
