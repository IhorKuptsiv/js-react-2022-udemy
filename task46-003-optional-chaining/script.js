'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if(block){
//     console.log(block.textContent);

// }
//console.log(block?.textContent);
//block?.textContent = '123';  // error - block?.textContent получили undefind

console.log(1 +2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function(){
        console.log('Hello');
    }
}

userData.say();
userData.hey?.(); // -  перевіряємо ліву частину , якщо існує тоді метод викликається якщо не існує undefind


// if(userData && userData.skills && userData.age.skills.js){
//     console.log(userData.skills.js);
// }
//skills не існує
// ? - перевіряє зліва від себе, якщо існує код іде далі на право .
console.log(userData?.skills?.js);  //? перевіряє зліва від себе і якщо код існує піде далі

