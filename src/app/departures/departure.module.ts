import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DepartureDetailsComponent } from './departure-details/departure-details.component';
import { DeparturesListComponent } from './departures-list/departures-list.component';
import { DepartureService } from '../Services/departure.service';
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
    DepartureDetailsComponent ,
    DeparturesListComponent
    ],
  providers: [DepartureService]
})
export class DepartureModule { }


