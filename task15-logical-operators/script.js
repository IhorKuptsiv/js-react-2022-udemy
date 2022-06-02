"use strict";
//logical operator

// логічне І  &&

// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries){
//     console.log('Я ситий');
// } 

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;
// має бути 3 бургера і хочаб 1 картопля
//Виконується  1   3        2     4   по приорітету

// 0 кола - виведе переш хибне значення або останнє правдивве 1 фрі
// console.log((hamburger === 3 && cola && fries))

//console.log( 1 && 0); //тру і фолс 0 - бо останнє неправдиве
//console.log (1 && 5); // дві правдиві - 5 - останнє правдиве
//console.log (null && 5);// не правду і тру - null - перше неправдиве
//console.log (0 && 'asdsadsa');// 0 і строка - 0 на першому не правдивому
// && повертає не тільки тру а і значення яке є ТРУ (1, 5 і тд)
// завжди false - 0, пустий стрінг, null, undefind, Nan
// оператор && завжди повертає перше Хибне значення 
// якщо всі аргументи ТРУ , то повертає останній тру елемент
// && запинається на FALSE      || на TRUE

// if(hamburger === 3 && cola === 1 && fries){
//     console.log('Всі ситі');
// } else{
//     console.log('Ми ідемо');
// }

// || хочаб 1 тру

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

// || як тільки оператор получає TRUE він зупиняється
// ||  якщо все FALSE , тоді останнє неправдиве значення
// === && || - приорітет
if(hamburger === 3 && cola === 2 || fries === 3 && nuggets){
    console.log('Всі раді');
} else{
    console.log('Ми ідемо');
}

console.log(hamburger || cola || fries);



let johnReport, alexReport, samReport, mariReport = 'done';

console.log(johnReport || alexReport || samReport || mariReport );

console.log(!0); // 0 false !0 - true





