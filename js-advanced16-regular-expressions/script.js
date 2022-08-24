'use strict';

//regular expressions - регулярні вирази

//new RegExp ('pattert','flags');
// /pattert/f

//знайти всі букви n
//const ans = prompt('Введіть ваше імя');
//const reg = /n/;// шукаємо одну - n - патерт, шаблон що шукаємо

//потрібні флаги, щоб знайти !!всі буки n
// шукає перший символ n
//const reg = /n/ig;

//--------------------- flags в регулярних виразах
//і flag - шукає великі і малі букви
//g flag- глобал, декалька букв шукає
//m flag- багатостроковий режим, зпереносами шукаж


//console.log(ans.search(reg));// Ann = 1  asdad = -1
//console.log('asdsad');

//match- получаємо масив
//console.log(ans.match(reg));//['n', index: 1, input: 'Ann', groups: undefined]
//match - ANNN= (3) ['N', 'N', 'N']

//const pass = prompt('Password');

//replace - 1ше що замінюємо, 2ге - на що замінюємо
//регулярні вирази
//  /./ - беремо ВСІ елементи і замінюємо на * 
//   /\./ -  всі . змінює на *, екрануємо \
//console.log(pass.replace(/\./g, "*"));// *******

// змінюємо - на :
//console.log('12-34-56'.replace(/-/g, ':'));//12:34:56



//свої методи, test
//const ans = prompt('Введіть ваше імя ');
//const reg = /n/ig;
//const reg = /n/ig;
//test- перевіряє чи в строці є щось з   /n/ в  ans, повертає true false
//console.log(reg.test(ans));//true - Бо була 1 мала буква n

//---------------------класи в регулярних виразах
// \d - дігітс - шукаємо цифри
// \w - ворд - шукаємо всі букви, слова
// \s - спейсес - шукаємо всі пробіли

//const ans = prompt('Введіть ваше число ');
//const reg = /\d/ig;
//console.log(ans.match(reg));// ввів фівфі123фівфів  //(3) ['1', '3', '2']


const str = "My name is R2D2";// потрібно вирізати імя
// патерт /\w\d\w\d/ -  буква цифра буква цифра
console.log(str.match(/\w\d\w\d/i)); //['R2D2', index: 11, input: 'My name is R2D2', groups: undefined]

//------------класи навпаки
//\D - шукаємо НЕ числа
// \W - шукаємо НЕ букви
console.log(str.match(/\D/ig)); 