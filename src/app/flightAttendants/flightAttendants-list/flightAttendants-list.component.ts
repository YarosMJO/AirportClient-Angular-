import { Component, OnInit } from '@angular/core';
import { FlightAttendantService } from '../../Services/flightAttendants.service';
import { FlightAttendant } from '../../Models/FlightAttendant';

@Component({
  selector: 'app-flightAttendants-list',
  templateUrl: './flightAttendants-list.component.html',
  styleUrls: ['./flightAttendants-list.component.css']
})
export class FlightAttendantsListComponent implements OnInit {

  FlightAttendants: Array<FlightAttendant>;

  public Name: string;
  public Surname: string;
  public Birthday: Date;

  constructor(public service: FlightAttendantService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((items:Array<FlightAttendant>) => {
      this.FlightAttendants = items; });
  }

  add(){
    let item = new FlightAttendant(this.Name,this.Surname,this.Birthday);
    this.service.add(item).subscribe(result=>{
      this.FlightAttendants.push(item);
      this.getAll();
    });
  }

  delete(id: number): void {
    this.service.delete(id).subscribe( result => {
      this.getAll();
    });   
  }

   update(id:number,item: FlightAttendant){
    this.service.update(id,item).subscribe(result=>{
      this.getAll();
    });
  }
}
