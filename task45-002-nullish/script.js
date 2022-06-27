'use strict';

//оператор нульового злиття Nullish ES 11 - 2020

const box = document.querySelector('.box');

// якщо 1 параметри відсутні, будуть підставлятись автоматично ініші по замовчування

 const newHeight = 100;
 const newWidth = 400;

function changeParams(elem, h, w) {
    //h якщо задано || чи 200 якщо ні
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    //приорітет 200 * w потім ?? - дужки щоб виправити
    elem.innerHtml = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName ;//undefind
let userKey
// ?? -  з null або undefind виведе USER 
// перевіряємо чи інстує userName якщо ні тоді чи інстує userKey і тд
console.log(userName ?? userKey ?? 'User');

