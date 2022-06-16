'use strict';
//https://javascript.info/prototype-methods

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
      health: 400,
      armor: 100,
      sayHello: function() {
        console.log("hello");
      }
};
//створюєм новий обєкт джон який буде прототипно наслідуватись від солдата
//щоб джон мав доступ до функцій, методів, свойств
const john = Object.create(soldier);

// const john = {
//     health: 100
// };
// старий формат прототипів  джон візьме армор з солдата
//john.__proto__= soldier;

//Object.setPrototypeOf(john, soldier);

//console.dir(john.armor);
john.sayHello();


