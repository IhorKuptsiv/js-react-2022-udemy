'use strict';

//localStorage
//Як зберігати дані без БД

// це можливості глобального обєкта Window
//Chrome--Application--LocalStorage
//window.localStorage

// 4 команди localStorage

//setItem - щоб записати дані- новий ключ 

//localStorage.setItem('number',5);

//localStorage.removeItem('number');//null
//localStorage.clear();
//getItem - получаємо дані з localStorage
//localStorage.getItem('number');
//console.log(localStorage.getItem('number'));//5

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('color');

if(localStorage.getItem('isChecked')){//якщо чекбокс true
  checkbox.checked = true; // ставимо чекбокс
}


if(localStorage.getItem('bg') === 'changed'){
    form.style.borderColor = '#red';

}

// зміни в локальній БД чекбокс нажатий
checkbox.addEventListener('change', () =>{
localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
// чи є щось в локал бд, якщо ні перекрашуємо в колір
// якщо є, в білий
if(localStorage.getItem('bg') === 'changed'){
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff';

}else{
    // якщо нічого в локал сторидж
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';

}
});

//обєкт який зберігаємо в локал сторидж
const persone = {
   name: 'Alex',
   age: 25
};
//обєкт persone перетворюємо в JSON
const serilizePersone = JSON.stringify(persone);
localStorage.setItem('alex',serilizePersone);
console.log(JSON.parse(localStorage.getItem('alex')));
//записуємо обєкт на пряму
//localStorage.setItem('alex',persone);
//console.log(localStorage.getItem('alex'));


