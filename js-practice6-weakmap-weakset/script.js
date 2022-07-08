'use strict';

// let user = {name: 'Ivan'};

// user = null;

// console.log(user);//null  - Обєкт не існує вже


//-------------VS обєкт і масив
// let user = {name: 'Ivan'};
// const arr = [user];
// user = null;

// console.log(user);//null 
// console.log(arr[0]);//{ name: 'Ivan' }


//------------------MAP аналогічно , WeakMap - false
// let user = {name: 'Ivan'};
// let map = new WeakMap();
// map.set(user, 'data');
// user = null;

// console.log(user);//null 
// //console.log(map.has(user)); //false
// console.log(map);//WeakMap { <items unknown> } - відсутні будь які свойства

// WeakMap доступно тільки : set, get, delete, has



let cache = new WeakMap();

function cahcheUser(user){
    // коли користувач заходиьт в чат ми його кешуємо
    // коли виходить - викидаємо його і очищаємо память

    // якщо в мене ще не має такого користувача
    // в середині WeakMap то я буду його додавати
    if (!cache.has(user)){
        //Date.now() - коли зайшов користувач
        cache.set(user, Date.now());
    }
    return cache.get(user);

}

let lena ={name: 'Elena'};
let alex ={name: 'Alex'};

cahcheUser(lena);
cahcheUser(alex);

lena = null; // вийшла з чату

console.log(cache.has(lena));// false - вийшла з чату
console.log(cache.has(alex));// true


//----------колекція WeakSet (тільки обєкти можна додавати)
//  .add  .has  .delete
// можна додавати тільки обєкти
//WeakMap не перебираєма
// динамічна структура

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '...', from: 'M'},

];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
//readMessages.add(messages[1]);

readMessages.add(messages[0]);// буде проігнорований, тільки унікальні значення
messages.shift();//shift - видалить першу частину обєкту.
//false після видалення через shift

console.log(readMessages.has(messages[0]));//true





