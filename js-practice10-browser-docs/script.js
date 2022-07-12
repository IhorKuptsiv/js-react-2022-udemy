'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

//clien - Висота ширина без скролу
// const width = box.clientWidth;
// const height = box.clientHeight;

// offset- висота ширина з скролом і відступами( як в CSS)
// const width = box.offsetWidth;
// const height = box.offsetHeight;

//scroll - все висота навіть не видима, ширина без скролу
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width,height);

btn.addEventListener('click', () =>{
//box.style.height = box.scrollHeight + 'px';// розгорнути весь блок
console.log(box.scrollTop);// скільки рх проспролили 
});
 
//console.log(box.getBoundingClientRect());// координати, вис, шир, тд.
console.log(box.getBoundingClientRect().top);// відступ від верху

// як получити стилі які були виконнані на сторінці за допомогою CSS
// getComputedStyle
// window - глобальна сущність через яку бачимо сайт
const style = window.getComputedStyle(box);

console.log(style.display);// display  --- block в CSS

console.log(document.documentElement.clientWidth);// 1665 px 
console.log(document.documentElement.scrollTop);// 90 px

console.log(window.scrollBy(0,400));// скрол від 0 позиції на 400 рх
console.log(window.scrollBy(0,400));//скрол від початку сторінки на 400 рх
