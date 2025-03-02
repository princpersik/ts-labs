"use strict";
// Variant 4
const data = [];
const record = (param) => {
    data.push(param);
    console.log('Record: ' + param + ' added!');
};
function remove() {
    data.pop();
    console.log('Record removed!');
}
record(12345);
remove();
// Task 1
let stopwatch = 0;
const intervalId = setInterval(() => {
    record(stopwatch);
    setTimeout(() => remove(), 10000);
    stopwatch++;
    if (stopwatch >= 6) {
        clearInterval(intervalId);
    }
}, 10000);
// Task 2
function Identifier(name) {
    return function (surname) {
        console.log("Hello! Your input: " + name + " " + surname);
    };
}
const Ksenia = Identifier("Ksenia");
const Yana = Identifier("Yana");
Ksenia("Volodko");
Yana("Prokopkina");
