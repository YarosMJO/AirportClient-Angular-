import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { FlightDetailsComponent } from './flight-detail/flight-detail.component';
import { FlightService } from '../Services/flight.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    FlightDetailsComponent ,
    FlightsListComponent
    ],
    providers : [FlightService]
})
export class FlightModule { }


