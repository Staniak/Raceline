import { Car } from "../car";
import { Driver } from "../driver";

export class Lexus extends Car {
    constructor(driver?: Driver){
        super('Lexus', '/assets/cars/lexus.png', driver)
    }
}
