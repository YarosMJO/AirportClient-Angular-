import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CrewService } from '../Services/crew.service';
import { CrewDetailsComponent } from './crew-details/crew-details.component';
// import { CrewsListComponent } from './crews-list/crews-list.component';
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
    CrewDetailsComponent ,
    // CrewsListComponent
    ],
    providers : [CrewService]
})
export class CrewModule { }


