'use strict';
//https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// }
// передає ссилку на обєкт a - 5  b- 1
// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);
// a - 10 b - 1    a-10 b-1

//створюєм новий обєкт перебираючи старі свойства обєкта
function copy (mainObj){
let objCopy ={};

let key;
for(key in mainObj){
    // проходимось по старому обєкту
    // копіюємо там всі свойства
    // і зариешемо в наш новий обєкт
    objCopy[key] = mainObj[key];
}
return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
//клонування обєкту
const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// { a: 10, b: 5, c: { x: 7, y: 4 } }
//{ a: 2, b: 5, c: { x: 7, y: 4 } }
// console.log(newNumbers);
// console.log(numbers);


const add = {
    d: 17,
    c: 20
};

//console.log(Object.assign(numbers,add));
const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdsadsad';
console.log(oldArray);
console.log(newArray);

//spread

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);


function log (a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);

}
const num = [2, 5, 7];

//spread
log(...num);

const array = ["a", "b"];
const newArrayTwo = [...array];

const q = {
    one: 1,
    two: 2
};
const newObj = {...q};






