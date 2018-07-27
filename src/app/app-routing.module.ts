import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketDetailsComponent } from './tickets/ticket-detail/ticket-detail.component';
// import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
// import { FlightsListComponent } from './flights/flights-list/flights-list.component';
import { DeparturesListComponent } from './departures/departures-list/departures-list.component';
// import { CrewsListComponent } from './crews/crews-list/crews-list.component';
import { PilotsListComponent } from './pilots/pilots-list/pilots-list.component';
import { FlightAttendantsListComponent } from './flightAttendants/flightAttendants-list/flightAttendants-list.component';
// import { PlaneTypesListComponent } from './planeTypes/plane-types-list/plane-types-list.component';
// import { PlanesListComponent } from './planes/planes-list/airplanes-list.component';
import { CrewDetailsComponent } from './crews/crew-details/crew-details.component';
import { PlaneDetailsComponent } from './planes/plane-details/plane-details.component';
import { PlaneTypeDetailsComponent } from './planeTypes/plane-type-details/plane-type-details.component';
import { DepartureDetailsComponent } from './departures/departure-details/departure-details.component';
import { FlightDetailsComponent } from './flights/flight-detail/flight-detail.component';
import { PilotDetailsComponent } from './pilots/pilot-detail/pilot-detail.component';
import { FlightAttendantDetailsComponent } from './flightAttendants/flightAttendants-detail/flightAttendants-details.component';

const routes: Routes = [
  // { path: 'tickets', pathMatch: 'full', component: TicketListComponent },
  { path: 'tickets/:id', component: TicketDetailsComponent},
  // { path: 'flights', pathMatch: 'full', component: FlightsListComponent },
  { path: 'flights/:id', component: FlightDetailsComponent},
  { path: 'departures', pathMatch: 'full', component: DeparturesListComponent },
  { path: 'departures/:id', component: DepartureDetailsComponent},
  // { path: 'crews', pathMatch: 'full', component: CrewsListComponent },
  { path: 'crews/:id', component: CrewDetailsComponent},
  { path: 'pilots', pathMatch: 'full', component: PilotsListComponent },
  { path: 'pilots/:id', component: PilotDetailsComponent},
  { path: 'flightAttendants', pathMatch: 'full', component: FlightAttendantsListComponent },
  { path: 'flightAttendants/:id', component: FlightAttendantDetailsComponent},
  // { path: 'planes', pathMatch: 'full', component: PlanesListComponent },
  { path: 'planes/:id', component: PlaneDetailsComponent},
  // { path: 'planeTypes', pathMatch: 'full', component: PlaneTypesListComponent },
  { path: 'planeTypes/:id', component:  PlaneTypeDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




