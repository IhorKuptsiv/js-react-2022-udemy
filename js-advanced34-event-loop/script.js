'use strict';

//event loop.
//Асинхронні і синхронні операції
console.log(1);

setTimeout(() => {
    console.log('timeout');
}, 2000);

setTimeout(() => {
    console.log('timeout_4000');
}, 4000);

console.log(2);

// 1  -- синхронний код
// 2  -- синхронний код
// timeout  -- асинхронний код  setTimeout / setInterval
// timeout_4000  -- асинхронний код setTimeout / setInterval

//всі колбеки, асинхронні  !!!!
// клік, скрол, сабміт --- асинхронні