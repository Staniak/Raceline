import { Car } from "../car";
import { Driver } from "../driver";

export class AlfaRomeo extends Car{
    constructor(driver?: Driver){
        super('Alfa Romeo', '/assets/cars/alfa.png', driver)
    }
}
