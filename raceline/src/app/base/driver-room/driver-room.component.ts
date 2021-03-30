import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Driver } from '../driver';

@Component({
  selector: 'app-driver-room',
  templateUrl: './driver-room.component.html',
  styleUrls: ['./driver-room.component.scss']
})

export class DriverRoomComponent implements OnInit {
  @Output() selected = new EventEmitter<Driver>();
  drivers: Driver[] = [];
  selectedDriver: Driver = null;

  constructor() { }

  ngOnInit() {
    this.drivers.push(new Driver('Dominic Torreto', '/assets/drivers/john.png'));
    this.drivers.push(new Driver('Paul Walker', '/assets/drivers/adam.png'));
    this.drivers.push(new Driver('Lia Lee', '/assets/drivers/lisa.png'));
  }

  select(driver: Driver): void{
    this.selectedDriver = driver;
    this.selected.emit(driver);
  }

  driverReturn(driver: Driver): void{
    this.drivers.push(driver);
  }

  driverAssign(): void{
    let index;
    index = this.drivers.indexOf(this.selectedDriver);
    this.drivers.splice(index, 1);
    this.selectedDriver = null;
  }
}
