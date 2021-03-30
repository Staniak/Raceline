import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarType } from '../../interface/car-type.enum';
import { FormCarType } from '../../interface/order-form-value';

@Component({
  selector: 'app-mechanic-room',
  templateUrl: './mechanic-room.component.html',
  styleUrls: ['./mechanic-room.component.scss']
})
export class MechanicRoomComponent implements OnInit {
  carTypes: FormCarType[] = [
    {label: 'Lexus', value: CarType.Lexus},
    {label: 'Alfa', value: CarType.Alfa}
  ]

  form: FormGroup;


  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      shipType: new FormControl(CarType.Lexus, {validators: [Validators.required]}),  
      shipCount: new FormControl(1, {validators: [Validators.required, Validators.min(1), Validators.max(5)]}),  
    })
  }

  orderCar(value: FormCarType){
    console.log(value);
  }

}
