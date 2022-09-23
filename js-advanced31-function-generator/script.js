'use strict';

//функції генератори і робить це послідовно
//function* або *generator перед назвою

//викликали 1 раз, дає один результат
//викликали 2 раз, інший результат
function* generator() {
  yield 'S';
  yield 'c';
  yield 'r';
  yield 'i';
  yield 'p';
  yield 't';

}

const str = generator();

console.log(str.next()); //{ value: 'S', done: false }
console.log(str.next().value); // S
console.log(str.next()); //{ value: 'c', done: false }
console.log(str.next()); //{ value: 'r', done: false }
console.log(str.next()); //{ value: 'S', done: false }
console.log(str.next()); //{ value: 'c', done: false }
console.log(str.next()); //{ value: 'r', done: false }

console.log(str.next()); //{ value: undefined, done: true }
console.log(str.next().value);


function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

const counter = count(7);
console.log(counter.next().value); //0
console.log(counter.next().value); //1
console.log(counter.next().value); //2

//перебор через for of
for (let k of count(7)) {
  console.log(k); // 0  1  2  3.....6
}