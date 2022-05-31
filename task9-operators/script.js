"use strict";
//https://learn.javascript.ru/bitwise-operators

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +"5"); //унарний плюс

let incr = 10,
decr = 10;

//++ incr ; //префіксний інкремент
// decr --; //постфіксний декримент

console.log(++incr);
console.log(decr--);

console.log(5%2);//5 /2 = 4   1 залишок


// = присвоєння  == порівнюванння по значенню чи числу === строго по типу даних
console.log(2*4 == 8); //8 true - по числу  '8' true - по значенню
console.log(2*4 == '8'); //true - == рівність по значенню
console.log(2*4 === '8');//false - === рівність по типу даних

//і && коли - 2 або більше правдиві вирази
//чи || коли - хоча б 1 правдиве

const isChecked = true,
isClose = false;

console.log(isChecked && isClose); // && true true - true 
// || true false -  true 
// && чи ||  false false - false

// ! заперечення , true - стає false і навпаки false--true

console.log(isChecked || !isClose); //!false в true;

//Порядок
console.log(2+2*2 === 8); //false
console.log (2+2*2 !== '6'); // не рівен по типу '6'


