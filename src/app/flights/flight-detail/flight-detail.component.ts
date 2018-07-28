import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../Models/Flight';
import { FlightService } from '../../Services/flight.service';
@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailsComponent implements OnInit {
  @Input() Flight: Flight;
  showElement:false;
  constructor( private route: ActivatedRoute,public service: FlightService,private _location: Location) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.get(id).subscribe((item : Flight) => {
      this.Flight = item;
    }) 
  }

  backClicked() {
      this._location.back();
  }
  update(id:number): void {
    this.service.update(id, this.Flight).subscribe();
  }

}
