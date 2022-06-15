'use strict';
//https://drive.google.com/file/d/17D4THU5-UJtzihybKVjSDHeX67pz3xLR/view
//http://coldfox.ru/article/5c7ffe64bbf20e61c12c7348/%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D0%B5-for-of-%D0%BE%D1%82-for-in-%D0%B2-javascript


const arr = [2,13,26,8,10];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a - b;
}

arr.forEach(function(item,i,arr){
    //item-значення кожного елемент  і - індекс кожног. елем, arr - масив
console.log(`${i}: ${item} в середині масиву ${arr}`);
});


// видаляє останній елемент масиву
//arr.pop();
// додає елемент в кінці масиву 
//arr.push(10);

//console.log(arr);

// for( let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
//перебор масиву break continue - можна використов. 
// for( let value of arr){
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));