'use strict';

//https://habr.com/ru/post/336136/

const box = document.getElementById('box');//id

console.log(box);

// в змінній btns получаємо псевдомасив ВСІХ button
//const btns = document.getElementsByTagName('button');
//результат html колекція
//console.log(btns);
// щоб отримати певну кнопку вказати потрібно індекс кнопки
// індекс 1 - 2 кнопка
const btns = document.getElementsByTagName('button')[1];
console.log(btns);
// або console.log(btns[1]);
