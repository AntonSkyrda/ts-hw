"use strict";
class Car {
    constructor(model, manufacturer, createdYear, maxSpeed, engineVolume) {
        this.increaseMaxSpeed = (newSpeed) => newSpeed > 0 ? this.maxSpeed = newSpeed : console.log("Incorrect input value");
        this.changeYear = (newValue) => this.createdYear = newValue;
        this.addDriver = (driver) => this.driver = driver;
        this.model = model;
        this.manufacturer = manufacturer;
        this.createdYear = createdYear;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`Drive with ${this.maxSpeed} km/h`);
    }
    info() {
        console.log(`
            Model: ${this.model},
            Manufacturer: ${this.manufacturer},
            Created Year: ${this.createdYear},
            Max Speed: ${this.maxSpeed},
            Engine Volume: ${this.engineVolume}.
            `);
    }
}
const myCar = new Car("Civic", "Honda", 2015, 200, 1.8);
myCar.info();
myCar.drive();
myCar.increaseMaxSpeed(250);
myCar.drive();
myCar.increaseMaxSpeed(-10);
myCar.changeYear(2020);
myCar.info();
myCar.addDriver({ name: "John", age: 30, license: true });
console.log(myCar.driver);
