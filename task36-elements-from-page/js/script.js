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


// получаємо всі елементи через клас circle 
const circles = document.getElementsByClassName('circle');
console.log(circles);

// метод querySelectorAll - в середину () вставляємо CSS селектор
//Підтримує - #id, class, вложеність класів, псевдокласи, атрибути класу
const hearts = document.querySelectorAll('.heart');//клас .heart - коли селектор ставимо . при вказуванні класу

//console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

//querySelector -  позволяє плучити тільки 1 елемент зі сторінки
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);