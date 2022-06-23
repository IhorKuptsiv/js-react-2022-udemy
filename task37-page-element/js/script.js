'use strict';
//https://drive.google.com/file/d/1sxbFDM645vAVnBhUuSgGKXadJTKuIn28/view
//https://caniuse.com/


//получаємо доступ до елементів

//querySelector -  один елемент
//querySelectorAll - всі елемент
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
      // oneHeart = wrapper.querySelector('.wrapper'); -  тільки елементи які в середині врапер


//console.dir(box);
//inline стилі - по приорітеті самі важливі
//  box.style.backgroundColor = 'blue';
//  box.style.width = '500px';

// cssText -  щоб задати стиль для всіх кнопок або блоків
box.style.cssText = 'background-color: red; width:600px';

//робимо овальною 2гу кнопку 
btns[1].style.borderRadius = '100%';

//обовязково вказувати елемент [0]
circles[0].style.backgroundColor = 'red';



// ` ` - щоб додати змінні `asdadsad ${num}px`
//box.style.cssText = `background-color: blue; width:500px`;


// над декількома елементами виконати одинакові дії

//цикл, for of  , foreach

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

//forEach перебор всіх сердень, 1 серце як item
hearts.forEach(item => {
item.style.backgroundColor = 'blue';
});



// МЕТОДИ для роботи зі сторінкою

// document.createElement - метод 
//  ----------------------------div тег який створили
const div = document.createElement('div');

// текстові вузли - елементи без оболочки тега
// const text = document.createTextNode('Тут був я');

// add метод на свойстві classList
div.classList.add('black');


// додати div в кінець body
// беремо тег body як батьківський і в середину нього в кінець додаємо div
//document.body.append(div);

//якщо 1 раз використовуємо метод append на елементі wrapper
//document.querySelector('.wrapper').append(div);

//в кінці блоку коду
wrapper.append(div);
// старі конструкції -  елемент блек в кінець 
// wrapper.appendChild(div);

// на початку блоку коду
//wrapper.prepend(div);


//перед яким елементом і після якого

//hearts[0].before(div);
//hearts[0].after(div);

//старий -  перший який вставляємо div , 2 - перед якийм елементом вставляємо
//wrapper.insertBefore(div, hearts[0]);

//видаляти елементи зі сторінки
//circles[0].remove();
//старий - 
//wrapper.removeChild(hearts[1]);


//замінити 1 елемент на який 2
//hearts[0].replaceWith(circles[0]);

//старий - 1 на що хочимо поміняти, 2 що міняється
//wrapper.replaceChild(circles[0], hearts[0]);



// вписати текст
//div.innerHTML = "<h1>Hello world</h1>";

//div.textContent = "Hello";

// вставити кусок html коду перед або після якогось елементу
div.innerHTML = "<h1>Hello world</h1>";

// beforebegin - перед елементом
// afterbegin - в початок елементу
// beforeend - в кінець елементу
// afterend - після елементу
div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');













