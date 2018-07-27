import { Component, OnInit } from '@angular/core';
import { PilotService } from '../../Services/pilot.service';
import { Pilot } from '../../Models/Pilot';


@Component({
  selector: 'app-pilots-list',
  templateUrl: './pilots-list.component.html',
  styleUrls: ['./pilots-list.component.css'],
  providers: [PilotService]
})


export class PilotsListComponent implements OnInit {

  Pilots: Array<Pilot>;
  public Name: string;
  public Surname: string;
  public Birthday: Date;
  public Experience: number;


  constructor(public service: PilotService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((items:Array<Pilot>) => {
      this.Pilots = items; });
  }

  add(){
    let item = new Pilot(this.Name,this.Surname,this.Birthday,this.Experience);
    this.service.add(item).subscribe(result=>{
      this.Pilots.push(item);
      this.getAll();
    });
  }

 private delete(id: number): void {
    this.service.delete(id).subscribe( result => {
      
      this.getAll();
    });   
  }

   update(id:number,item: Pilot){
    this.service.update(id,item).subscribe(result=>{
      this.getAll();
    });
  }
}
