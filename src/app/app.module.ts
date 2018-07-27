import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './navmenu/navmenu.component';

import { TicketModule } from './tickets/ticket.module';
import { FlightModule } from './flights/flight.module';
import { DepartureModule } from './departures/departure.module';
import { CrewModule } from './crews/crew.module';
import { PilotModule } from './pilots/pilot.module';
import { FlightAttendantModule } from './flightAttendants/flightAttendant.module';
import { PlaneTypeModule } from './planeTypes/planeTypes.module';
import { PlaneModule } from './planes/plane.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    TicketModule,
    FlightModule,
    DepartureModule,
    CrewModule,
    PilotModule,
    FlightAttendantModule,
    PlaneModule,
    PlaneTypeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

