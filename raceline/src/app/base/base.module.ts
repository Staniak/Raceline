import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { GarageComponent } from './garage/garage.component';
import { CarComponent } from './car/car.component';
import { DriverComponent } from './driver/driver.component';
import { DriverRoomComponent } from './driver-room/driver-room.component';
import { MechanicRoomComponent } from './mechanic-room/mechanic-room.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GarageComponent, CarComponent, DriverComponent, DriverRoomComponent, MechanicRoomComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    GarageComponent
  ]
})
export class BaseModule { }
