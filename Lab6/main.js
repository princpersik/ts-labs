"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log('Seal applied!');
}
function Randomize(max) {
    return Math.floor(Math.random() * max);
}
function raised(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let capsLock = originalMethod.apply(this, args);
        return capsLock.toUpperCase();
    };
    console.log('Random string raised!');
    return descriptor;
}
class Vehicle {
    constructor(brand, model, releaseDate) {
        this.brand = brand;
        this.model = model;
        this.releaseDate = releaseDate;
    }
    getPropreties() {
        let output = this.brand + ' ' + this.model + ' ' + this.releaseDate;
        return output;
    }
    printPropreties(properties) {
        console.log(properties);
    }
}
__decorate([
    raised
], Vehicle.prototype, "getPropreties", null);
const automobile = new Vehicle('Gaz', 'Chaika', '1978');
automobile.printPropreties(automobile.getPropreties());
Object.defineProperty(Vehicle, 'bodyType', { value: 'Hatchback' });
// @ts-ignore
console.log(automobile.bodyType);
