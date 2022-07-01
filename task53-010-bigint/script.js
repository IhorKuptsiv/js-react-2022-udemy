'use strict';
//BigInt


//const bigint = 1232132132132421421214214214214214214214214124214n;
//в BigInt 12123n   додаємо n

//const sameBigint = BigInt(1232132132132421421214214214214214214214214);

//console.log(typeof(bigint));
//BigInt не можна використовувати з методами з встроєним обєктом Math
//BigInt не можна змішувати з іншими

//console.log(5n +1); //error -   мат дії BigInt i int
//console.log(Math.round(5n)); //error - Math не можна використовувати до BigInt

//console.log(5n +2n);
//console.log(5n / 2n);//  округляє без дробу = 2

//console.log(2n > 1);// true
//console.log(2n == 2); //true
//console.log(2n === 2); //false

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);

