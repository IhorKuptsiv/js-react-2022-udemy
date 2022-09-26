'use strict';

//macro micro task

//макро задача
setTimeout(() => console.log('timeout')); //асинхронний, попаде в api спочатку

// зразу кажемо проміс що він виконався в позитивну сторону
Promise.resolve() //мікро задача
    .then(() => console.log('promise')); //асинхронний, попаде в api спочатку

//синхронна команда
queueMicrotask(() => console.log('mirotask'));

Promise.resolve() //мікро задача 2
    .then(() => console.log('promise_2'));
console.log('code'); //синхронний

// code
// promise
// mirotask
// promise_2
// timeout

//then catch finally - які створюються промісами чи оператором await
//відносяться до МІКРО задач

// після кожної МАКРО завдання -- як наприклад setTimeout
// синхроннох чи асинхронної JS ядро виконує всі завданя
// з чарги МІКРО завдань, перед тим як виконати наступне
//МАКРО завдання 

// ОДНЕ макро завдання --> всі мікро завдання --> наступне макро завдання


//() => {}  //--- 1 macro task1
// microtasks: then/catch/finnaly/await
//render page
//() => {} // 1 macro task
//render page
//() => {}  //macro task


// Можливість самому запускати мікро задачі
// тобто код який виконається після макро завдань, але до рендерінга сторінки
//queueMicrotask