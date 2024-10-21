"use strict";
// //TODAY WORK 14/10/2024
Object.defineProperty(exports, "__esModule", { value: true });
let mypersons = {
    name: "Adeel",
    age: 17,
    gender: "Male",
};
console.log(mypersons);
let swordfish = {
    name: "Merlin",
    age: 5,
};
console.log(swordfish);
let Camel = {
    name: "Camel",
    age: 5,
    class: "Mammal",
};
for (var item in Camel) {
    console.log(item + " => " + Camel[item]);
}
