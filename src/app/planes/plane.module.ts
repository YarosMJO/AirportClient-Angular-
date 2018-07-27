import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlaneService } from '../Services/plane.service';
import { PlaneDetailsComponent } from './plane-details/plane-details.component';
// import { PlanesListComponent } from './planes-list/airplanes-list.component';
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
    PlaneDetailsComponent ,
    // PlanesListComponent
    ],
    providers : [PlaneService]
})
export class PlaneModule { }


