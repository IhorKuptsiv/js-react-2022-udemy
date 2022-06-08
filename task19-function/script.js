"use strict";
// Функції

let num = 20;
// назва функції     ( аргумент функції)
function showFirstMessage(text) {
    //дії функції
console.log(text);
//локальна змінна доступна тільки в середині функції
//let num = 20;
let num = 10;
console.log(num);
}
// викликаємо функцію
showFirstMessage("Hello");
console.log(num);


function calc (a, b){
    //повертає значення 
    return (a + b);
}
console.log(calc(4,3));
console.log(calc(1,3));

function ret() {
    let num = 50;
    // викидає за межі функції
    return num;
}
const anotherNum = ret();
console.log (anotherNum);


// FUNCTION DECLARATION
//функція працює до того як вони була викликана


//FUNCTION EXPRESSION  функціональний вираз
// вона створюється тільки коли код доходить до неї код
const logger = function () {
console.log("Hello!");
};
logger();

//ES 6 стрілочна функція
// не можна викликати, Використовують в обрободчиках собитій

// const calcTwo = (a, b) => a + b; 
const calcTwo = (a, b) => {
    console.log(`1`);
    return a + b;
}


