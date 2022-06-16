'use strict';
//https://javascript.info/prototype-methods

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
      health: 400,
      armor: 100
};
const john = {
    health: 100
};
// старий формат прототипів  джон візьме армор з солдата
john.__proto__= soldier;
console.dir(john.armor);
