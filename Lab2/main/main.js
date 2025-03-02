"use strict";
function min(array) {
    let element = array[0];
    let amount = summary;
    for (let i = 0; i < array.length; i++) {
        if (element > array[i]) {
            element = array[i];
        }
    }
    return element;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const min = min(array);
console.log(min);
function count(matrix) {
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] == 0) {
                counter++;
            }
            ;
        }
    }
    return counter;
}
const matrix = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
];
const zero = count(matrix);
console.log(zero);
function Tuple(tuple) {
    return tuple[0] + tuple[1] + tuple[2];
}
const tuple = ["Пу", "ПУ", "пу"];
const result = Tuple(tuple);
console.log(result);
var Vitamins;
(function (Vitamins) {
    Vitamins[Vitamins["Матричный"] = 0] = "Матричный";
    Vitamins[Vitamins["Струйный"] = 1] = "Струйный";
    Vitamins[Vitamins["Лазерный"] = 2] = "Лазерный";
    Vitamins[Vitamins["Термопринтер"] = 3] = "Термопринтер";
    Vitamins[Vitamins["Еще какой-нибудь"] = 4] = "Еще какой-нибудь";
})(Vitamins || (Vitamins = {}));
console.log(Vitamins[3]);
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() { return "No speak. I am fish!"; }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.name = "Baksik";
        this.age = 16;
    }
    speak() { return "Yaw-Gaw!"; }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Kuzya';
        this.age = 11;
    }
    speak() { return "Miyau!"; }
}
function printPet(pet) {
    console.log("Кличка: %s", pet.name);
    console.log("Полных лет: %s", pet.age);
    console.log("Издаёт звук: %s", pet.speak());
}
const doggie = new Dog();
printPet(doggie);
const kitty = new Cat();
printPet(kitty);
