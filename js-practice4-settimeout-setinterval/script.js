
// //setTimeout - приймає функцію або назву функції
// const timerId = setTimeout(function() {
//   console.log('Hello');

//   // хелло через 2000-2 сек
// },2000);

// АБО

// const timerId = setTimeout(function(text) {
//   console.log(text);

//   // хелло через 2000-2 сек
// },2000, 'Hello');

//АБО

// const timerId = setTimeout(logger, 2000);

// function logger () {
//   console.log('text');
// }

const btn = document.querySelector ('.btn');
let timerId,
    i = 0;

function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0;

  const id = setInterval(frame, 10);
  function frame(){
    if(pos == 300){
      clearInterval(id);
    }else{
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";


    }
  }
}


 btn.addEventListener('click',myAnimation);






// btn.addEventListener('click', () => {
// //const timerId = setTimeout(logger, 2000);
//  timerId = setInterval(logger, 2000);

// });

// //clearInterval(timerId);// зупиняємо таймер

// function logger () {
//   if( i === 3){
//     clearInterval(timerId);

//   }
//   console.log('text');
//   i++;
// }

// let id  = setTimeout(function log(){
//   console.log('Hello');
//   id = setTimeout(log, 500);
// }, 500);