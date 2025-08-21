interface IDriver {
    name: string;
    age: number;
    license: boolean;
}

class Car {
    model: string;
    manufacturer: string;
    createdYear: number;
    maxSpeed: number;
    engineVolume: number;
    driver?: IDriver;

    constructor(model: string, manufacturer: string, createdYear: number, maxSpeed: number, engineVolume: number) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.createdYear = createdYear;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive(): void {
        console.log(`Drive with ${this.maxSpeed} km/h`)
    }

    info(): void {
        console.log(
            `
            Model: ${this.model},
            Manufacturer: ${this.manufacturer},
            Created Year: ${this.createdYear},
            Max Speed: ${this.maxSpeed},
            Engine Volume: ${this.engineVolume}.
            `
        )
    }
    increaseMaxSpeed = (newSpeed: number): void | number => newSpeed > 0 ? this.maxSpeed = newSpeed : console.log("Incorrect input value");

    changeYear = (newValue: number): number => this.createdYear = newValue;

    addDriver = (driver: IDriver) => this.driver = driver;
}

const myCar = new Car("Civic", "Honda", 2015, 200, 1.8);

myCar.info();

myCar.drive();

myCar.increaseMaxSpeed(250);
myCar.drive();

myCar.increaseMaxSpeed(-10);
myCar.changeYear(2020);
myCar.info();

myCar.addDriver({name: "John", age: 30, license: true});

console.log(myCar.driver);
