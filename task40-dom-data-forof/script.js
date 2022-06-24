'use strict';
//https://developer.mozilla.org/ru/docs/Learn/HTML/Howto/Use_data_attributes


//------------БАТЬКІВСЬКІ методи
//console.log(document.body);

//console.log(document.documentElement);//HTML  tag

//console.log(document.body.childNodes);// text - перенос строки
//childNodes - позволяє получити всі вузли

//console.log(document.body.firstChild);
//console.log(document.body.lastChild);


//--------------- БУДЬ ЯКІ елементи на сторінці
// -----------БАТЬКІВСЬКІ, СУСІДИ, ДІТИ


//querySelector -  якщо змінна потрібна 1 раз тільки,
// її не потрібно поміщти в змінну

// получаємо ід кнопки #current, і клас батьківський first через parentNode
// і потім получаємо ще вищий батьківський клас wrapper - parentNode.parentNode
console.log(document.querySelector('#current').parentNode.parentNode); 

//data атрибути --- data-close  data-current  data-modal
//nextSibling - получаємо наступний елемент після data-current="3" previousSibling
//console.log(document.querySelector('[data-current="3"]').nextSibling);

//nextSibling - отримуємо наступний елемент або перенос строки 
//nextElementSibling - отримуєм наступний ЕЛЕМЕНТ!!!!
console.log(document.querySelector('[data-current="3"]').nextElementSibling);


//childNodes --- як отримати тільки ЕЛЕМЕНТИ??

//forof - коли не можимо використовувати forEach
// Завдання. Перебрати всіх childNodes в боді і позбавитись всіх text Nodes
for (let node of document.body.childNodes){
 if(node.nodeName == '#text'){
  continue;
 }
  console.log(node);
}