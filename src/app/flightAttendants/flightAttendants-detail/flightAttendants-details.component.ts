import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FlightAttendant } from '../../Models/FlightAttendant';
import { FlightAttendantService } from '../../Services/flightAttendants.service';
@Component({
  selector: 'app-pilot-detail',
  templateUrl: './flightAttendants-details.component.html',
  styleUrls: ['./flightAttendants-details.component.css']
})
export class FlightAttendantDetailsComponent implements OnInit {
  @Input() FlightAttendant: FlightAttendant;
  showElement:false;
  constructor( private route: ActivatedRoute,public service: FlightAttendantService,private _location: Location) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.get(id).subscribe((item : FlightAttendant) => {
      this.FlightAttendant = item;
    }) 
  }

  backClicked() {
      this._location.back();
  }
  update(id:number): void {
    this.service.update(id, this.FlightAttendant).subscribe();
  }

}
