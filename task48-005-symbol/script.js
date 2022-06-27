'use strict';
//Symbol 

//let id = Symbol("id");


// const obj = {
//     //name - string
//     'name': 'Test',
//    // [Symbol('id')]: 1
//    [Symbol('id')]: 1,
//   // [id]: 1,
//    getId: function(){
//     return this[id];
//    }
// }
// //id Змінна - обєкт символ з описом id
// // Символи унікальні і не змінимі
// //let id = Symbol("id");
// // let id2 = Symbol("id");

// // console.log(id == id2);//false

// //obj[id] = 1;

// //console.log(obj[id]);//id = 1, 'id' - undefind
// //console.log(obj);// получаємо обєкт
// //console.log(obj['id']);// получаємо undefind
// //console.log(obj.getId());
// console.log(obj [Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) console.log(value)




// ПЕРЕЗАПИСУВАНІ СВОЙСТВА

const myAwesomeDB = {
    movies: [],
    actors: [],
   // [Symbol("id")] : 123

   // глобальний рєестр символів
   [Symbol.for("id")] : 123

}

// інший код
myAwesomeDB.id = '32232323';

//console.log(myAwesomeDB["id"]);//32232323
console.log(myAwesomeDB[Symbol.for('id')]);//

console.log(myAwesomeDB);// id 32232323  i  [Symbol("id")] : 123

