import { Driver } from "./driver";

export abstract class Car {
    modelName: string;
    imageUrl: string;
    health: 100;
    activeNitro: true;
    activeBonus: true;
    driver: Driver;

    constructor(modelName: string, imageUrl: string, driver: Driver){
        this.modelName = modelName;
        this.imageUrl = imageUrl;
        this.driver = driver;
    }

}

