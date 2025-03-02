"use strict";
class Vehicle {
    constructor(brand, model, releaseDate) {
        this.brand = brand;
        this.model = model;
        this.releaseDate = releaseDate;
    }
}
class Garage {
    constructor(creationDate, vehicles) {
        this.creationDate = creationDate;
        this.vehicles = vehicles;
    }
    brandSort() {
        const limit = this.vehicles.length - 1;
        let output = this.vehicles.slice();
        for (let i = 0; i < limit; i++) {
            for (let j = 0; j < limit - i; j++) {
                if (output[j].brand > output[j + 1].brand) {
                    let temp = output[j];
                    output[j], output[j + 1] = output[j + 1], temp;
                }
            }
        }
        return output;
    }
    releaseFilter(century) {
        const output = [];
        for (const Vehicle of this.vehicles) {
            if (Vehicle.releaseDate.startsWith(century)) {
                output.push(Vehicle);
            }
        }
        return output;
    }
    displayVehicles() { return this.vehicles; }
}
const car1 = new Vehicle('Audi', 'Doomed', '2000');
const car2 = new Vehicle('Citroen', 'Absolute', '1980');
const car3 = new Vehicle('DMC', 'Bewildering', '2010');
const car4 = new Vehicle('BMW', 'Chaotic', '1990');
const carStorage = new Garage(new Date('1987-01-01'), [car1, car2, car3, car4]);
console.log(carStorage.displayVehicles());
console.log('///');
console.log(carStorage.brandSort());
// console.log(carStorage.displayVehicles());
console.log('///');
console.log(carStorage.releaseFilter('19'));
