'use strict';

//http://jsflow.org/docs/js-engines/
//https://learn.javascript.ru/function-object
// Замикання функцій та лексичне оточення

// let number = 5; debugger

// function logNumber() {
//   let number = 4; debugger
//   // number - ссилка на змінну, а не її значення(5) = 6
//   console.log(number);
// }

// number = 6;
// logNumber();debugger

//створюєм змінну createCounter - глобальної області, присвоюєм виповнення функції
function createCounter() {
  let counter = 0;
// function expresion - томущо поміщаємо в середину змінної
  const myFunction = function(){
    //замикання яке є частиною функції myFunction
    // myFunction функція коли буде викликана , вона зберігає ссилку на counter
   counter = counter + 1; debugger
   return counter;debugger
  }

  return myFunction;
}
//викликаємо функцію createCounter а повернутись повинна myFunction функція
// створюємо змінну increment яка буде undefined , глобальна, і виклики функції createCounter
const increment = createCounter();
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);