//https://habr.com/ru/company/sibirix/blog/227175/
'use strict';

// touchstart - при дотику
// touchmove - коли зміщується палець
// touchend -  коли відірвався палець
// touchenter - коли палиць заходить на границі елементи
// touchleave - коли вийшов за межі елементу
// touchcancel - коли дотику не рєєструється на екрані

window.addEventListener('DOMContentLoaded', () => {
const box = document.querySelector ('.box');

box.addEventListener('touchstart', (e) =>{
  e.preventDefault();

  console.log('Start');
  //console.log(e.touches);
  console.log(e.targetTouches);
  //console.log(e.changedTouches);

  

  

});
box.addEventListener('touchmove', (e) =>{
  e.preventDefault();

  console.log(e.targetTouches[1].pageX);
});

box.addEventListener('touchend', (e) =>{
  e.preventDefault();

  console.log('End');
});

});

//touches - список всіх пальців які взаємодіють
//targetTouches - всі пальци з елементом
//changedTouches - список пальців
