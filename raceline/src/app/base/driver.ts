export class Driver {
    firstName: string;
    lastName: string;
    imageUrl: string;

    static defaultImageUrl = '/assets/unknown-pilot.png';

constructor(fullName: string, imageUrl = Driver.defaultImageUrl){
    this.setfullName(fullName);
    this.imageUrl = imageUrl;
}

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    setfullName(value: string) {
      const values = value.split(' ');
      this.firstName = values[0];
      this.lastName = values[1];
    }
}