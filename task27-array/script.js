'use strict';
//https://drive.google.com/file/d/17D4THU5-UJtzihybKVjSDHeX67pz3xLR/view
//http://coldfox.ru/article/5c7ffe64bbf20e61c12c7348/%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D0%B5-for-of-%D0%BE%D1%82-for-in-%D0%B2-javascript


const arr = [2,3,6,8,10];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

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
//перебор масиву
for( let value of arr){
    console.log(value);
}
