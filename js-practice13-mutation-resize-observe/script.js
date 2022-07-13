'use strict';

//MutationObserve - слідкувати зміни елемента ( не подій)
const box = document.querySelector('.box');
//включати редагування сторінки користувача 

//сутність слідкує за елементом. MutationRecord- аргумент
let observer = new MutationObserver(MutationRecord => {
    //що приходить 
console.log(MutationRecord);

});

// слідкуємо за певним елементом, якщо щось виконується 
// тоді виконуємо функцію
// метод observe - слідкує
//box - за цим слідкуємо, 
observer.observe(box, {
    // childList - додавання видалленя текстові вузли, дочірних елементів
    childList: true
});
observer.disconnect();