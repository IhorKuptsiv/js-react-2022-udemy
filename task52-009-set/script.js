'use strict';
//set
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find


//const arr = [1, 1, 2, 2, 4, 5, 6, 5];

//const set = new Set(arr);

//console.log(set);// 1,2,4,5,6 - без повторень, тільки унікальні

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

function unique (arr){
    // return new Set(arr);
    return Array.from(new Set(arr));
 }
 console.log(unique(arr));

// const set = new Set(arr);

// set.add('Ivan')// додасть Іван
//    .add('Oleg');// не додасть, так як це дубль

// console.log(set);

// set.delete(value);// видаляти
// set.has(value); // перевіряти і поміщати 
// set.clear();// очистити
// set.size;// розмір - скільки елементів

// перебирати
//for(let value of set ) console.log(value);

// set.forEach((value, valueAgain, set) =>{
// console.log(value, valueAgain);
// })

// console.log(set.values());
// set.keys();
// set.entries();

// функція допомгає фільтрувати масив

