"use strict";
// методи і пропс( свойства) стрінгів і чисел
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String

const str = "test";
const arr = [1, 2, 4];

//console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
//console.log(logg.slice(6, 11));
//console.log(logg.slice(-5, -1)); З права на ліво вирізає

//console.log(logg.substring(6, 11)); // world виріже

//console.log(logg.substr(6, 5));// скільки символів треба вирізати

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));













