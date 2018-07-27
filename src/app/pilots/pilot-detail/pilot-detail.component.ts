import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Pilot } from '../../Models/Pilot';
import { PilotService } from '../../Services/pilot.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailsComponent implements OnInit {
  @Input() Pilot: Pilot;
  showElement:false;
  constructor( private route: ActivatedRoute,public service: PilotService,private _location: Location) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.get(id).subscribe((item : Pilot) => {
      this.Pilot = item;
    }) 
  }

  backClicked() {
      this._location.back();
  }
  update(id:number): void {
    this.service.update(id, this.Pilot).subscribe();
  }

}
