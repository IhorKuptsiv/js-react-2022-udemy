'use strict';

//http://jsflow.org/docs/js-engines/
//https://learn.javascript.ru/function-object
// Замикання функцій та лексичне оточення

let number = 5;

function logNumber() {
  // number - ссилка на змінну, а не її значення(5) = 6
  console.log(number);
}

number = 6;
logNumber();
