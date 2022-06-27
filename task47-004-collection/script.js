'use strict';
//collection
//querySelector   querySelectorAll


const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');


// matches - найти елемент з певним css селектором
boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log(box);
})


console.log(boxesQuery[0].closest('.wrapper'));

// boxesQuery[0].remove(); //результат 3 - статичний результат, спочатку виводить потім видаляє

// boxesGet[0].remove();// динамічний результат

// for( let i = 0; i < 5; i++){
//  const div = document.createElement('div');
//  div.classList.add('box');
//  //document.body.append(div);   
// }

// console.log(boxesQuery);//querySelectorAll- получимо вузли NodeLit
// console.log(boxesGet);//getElementsByClassName- получимо елементи HTMLCollection

// //console.log(document.body.children);


// console.log(Array.from(boxesGet));//Жива HTMLCollection в масив


