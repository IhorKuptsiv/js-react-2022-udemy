'use strict';

//Методи перебору масивів

//forEach - ніколи не повертає новий масив

//---------------------filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// всі імя які мене 5 символів
// сюди буде записуватись новий масив
const shortNames = names.filter(function(name) {
 return name.length < 5; // всі елементи менші 5 символів  
});  

console.log(shortNames); //[ 'Ivan', 'Ann' ]

//----------------------map
// дозволяє взяти початковий масив і змінити кожен його елемент

let answers = ['IvAn', 'AnnA', 'Hello'];
// всі імя нижнього регістру
// також повертає map новий масив
// кожен елемент буде як item
//const result = answers.map(item => item.toLocaleLowerCase());
//console.log(result);//[ 'ivan', 'anna', 'hello' ]

//----- перезаписуємо інснуючий масив
answers = answers.map(item => item.toLocaleLowerCase());

console.log(answers);//[ 'ivan', 'anna', 'hello' ]



//-----------------------every/some
// some - бере масив перебирає, якщо хоч 1 елемент підходить
// по умові повертає ТРУ якщо ні ФОЛС 

const some = [4, 'qwq', 'sfafsafaf'];
//перевіряємо чи є хоч 1 число в масиві тоді ТРУ
console.log(some.some(item => typeof(item) === 'number'));//true

// якщо всі елементи в масиві підходять тоді ТРУ
console.log(some.every(item => typeof(item) === 'number'));//false



//---------------reduce
//збирати масив в одне ціле
const arr = [4, 5, 1, 3, 2, 6];
// получити суму елементів
//reduce- повертає новий масив
//                       0      4
//                       4      5
//                       9      1
//                       10     3
// sum спочатку 0, current 4 і додаються
//sum, current, 3 - де 3 початкове значення
const res = arr.reduce((sum, current) => sum + current,3);
console.log(res);//21 або 24 з 3


// reduce з стрінгами, збираємо в один
const arrStr = ['apple','pear','plum'];
// одна стрінга чере кому всі елементи масиву
//const resStr = arrStr.reduce((sum, current) => sum +', '+ current);
const resStr = arrStr.reduce((sum, current) => `${sum}, ${current}`);

console.log(resStr);//apple, pear, plum



//---------------- практика
const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal'
};

// витягнути імя людей
//entries - бере обєкт і перетворює в матницю ( масив масивів)
const newArr = Object.entries(obj)
// чейнінг
.filter(item => item[1] === 'persone')//[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
.map(item => item[0]);//[ 'ivan', 'ann' ]

console.log(newArr);
