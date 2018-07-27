import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlaneTypeDetailsComponent } from './plane-type-details/plane-type-details.component';
// import { PlaneTypesListComponent } from './plane-types-list/plane-types-list.component';
import { PlaneTypeService } from '../Services/planeType.service';
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
    PlaneTypeDetailsComponent ,
    // PlaneTypesListComponent
    ],
    providers : [PlaneTypeService]
})
export class PlaneTypeModule { }


