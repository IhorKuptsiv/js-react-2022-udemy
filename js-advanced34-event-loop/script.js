'use strict';

//event loop.
//Асинхронні і синхронні операції
// console.log(1);

// setTimeout(() => {
//     console.log('timeout');
// }, 2000);

// setTimeout(() => {
//     console.log('timeout_4000');
// }, 4000);

// console.log(2);

// 1  -- синхронний код
// 2  -- синхронний код
// timeout  -- асинхронний код  setTimeout / setInterval
// timeout_4000  -- асинхронний код setTimeout / setInterval

//всі колбеки, асинхронні  !!!!
// клік, скрол, сабміт --- асинхронні


//як це працбє в середині JS
//stack, event loop(собетійний цикл), web api
//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
let k = 0;

function count() {
    for (let i = 0; i < 1e9; i++) { //call stack
        k++;
    }
    alert('done');
}
count();


//на співбесіді
setTimeout(() => {
    console.log(1);
}, 0); // тут 4 мілісекунди по дефолту
console.log(2);
//2  -- синхронна
//1  -- асинхронна 
//setTimeout-- іде в Web Apis-- > Callback queue-- > call stack
// коли JS бачить 0, автоматично підставляє 4 мілісекунди, для сумісності з різними брайзерами