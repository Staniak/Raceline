import { CarType } from "./car-type.enum";

export interface OrderFormValue {
    shipCount: number;
    shipType: CarType;
}

export interface FormCarType {
    label: string;
    value: CarType;
}