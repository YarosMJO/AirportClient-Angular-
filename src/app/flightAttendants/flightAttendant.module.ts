import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlightAttendantsListComponent } from './flightAttendants-list/flightAttendants-list.component';
import { FlightAttendantDetailsComponent } from './flightAttendants-detail/flightAttendants-details.component';
import { FlightAttendantService } from '../Services/flightAttendants.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    FlightAttendantDetailsComponent ,
    FlightAttendantsListComponent,
    ],
    providers : [FlightAttendantService]
})
export class FlightAttendantModule { }


