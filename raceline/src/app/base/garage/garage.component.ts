import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../car';
import { AlfaRomeo } from '../cars/alfa-romeo';
import { Lexus } from '../cars/lexus';
import { Driver } from '../driver';
import { DriverRoomComponent } from '../driver-room/driver-room.component';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {
  cars: Car[] = [];
  selectedDriver: Driver = null;
  defaultDriver: Driver = new Driver("John", "/assets/drivers/john.png");

  constructor() {
  }
  
  @ViewChild(DriverRoomComponent, {static: false}) driverRoomComponent: DriverRoomComponent;
  
  ngOnInit() {
    this.cars.push(new Lexus(this.defaultDriver));
    this.cars.push(new Lexus);
    this.cars.push(new AlfaRomeo);
  }

  assignDriver(car: Car){
    car.driver = this.selectedDriver;
    this.driverRoomComponent.driverAssign();
    // this.cars.find(c => c === car).driver = this.selectedDriver;
  }

  deassignDriver(car: Car){
    // this.cars.find(c => c === car).driver = null;
    this.driverRoomComponent.driverReturn(car.driver);
    car.driver = null;
  }
}
