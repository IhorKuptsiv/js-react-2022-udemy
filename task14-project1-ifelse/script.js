"use strict";
//if else

if (4 == 9){
    console.log('OK!');
}else{
console.log('Error');
}  


const num = 50;
if(num <49){
    console.log('error');
}else if(num >100){
    console.log('БАгато');
}else{
    console.log('OK!');
}

//тернарний оператор   - ? 
// томущо в його роботі приймає участь 3 аргументи 
// якщо умова виконалось -ОК, якщо не виконалось ERROR 
(num === 50) ? console.log('Ok') : console.log('error');
// 1 аргумент    2 аргумент         3 аргумент
// + 4 унарний аргумент
// 4 + 4 бінарний аргумент 


//switch СТРОГЕ порівняння числа з числами 50, стрінги з стрінгами '50'

const numTwo = 50;
switch(numTwo){
     case 49:
         console.log('Невірно');
         break;
     case 100:
         console.log('Невірно');
         break;
     case 50:
         console.log('Вірно!');
         break;
     //якщо ніодин кейс не вірний
    default: 
    console.log('Жоден невірний!');
    break;

}