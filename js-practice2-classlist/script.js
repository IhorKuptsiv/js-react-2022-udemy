const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);//2 -два класи
//console.log(btns[0].classList.item(1));//item - получаємо клас під індексом , 0 = blue, 1 some
//console.log(btns[1].classList.add('red','asdasdasd'));//add- додаємо клас червоний
//console.log(btns[0].classList.remove('blue'));//remove - видаляє клас блу
//console.log(btns[0].classList.toggle('blue'));//toggle - додає клас якщо він десь відсутній

// перевіряє клас на елементі, повертає тру фолс
// if(btns[1].classList.contains('red')){
//     console.log('red');//red - 2га кнопка червона
// }

//1ша кнопка, оброботчик собитій на клік
btns[0].addEventListener('click', () => {
//     // якщо у 2 кнопки немає класу ред буду добавляти, якщо є буду забирати 
//     if(!btns[1].classList.contains('red')){// перевіряємо 2 кнопку що немає класу ред
//   btns[1].classList.add('red');
// }else{
// btns[1].classList.remove('red');
// }

btns[1].classList.toggle('red');
});

//console.log(btns[0].className);


 wrapper.addEventListener('click', (event) => {
   if(event.target && event.target.matches("button.red")){
     console.log('Hello');
   }
 });

// btns.forEach(btn => {
//     btn.addEventListener('click', () =>{
//   console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);