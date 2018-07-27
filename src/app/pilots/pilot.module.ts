import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PilotsListComponent } from './pilots-list/pilots-list.component';
import { PilotDetailsComponent } from './pilot-detail/pilot-detail.component';
import { PilotService } from '../Services/pilot.service';

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
    PilotDetailsComponent ,
    PilotsListComponent
    ],
    providers : [PilotService]
})
export class PilotModule { }