'use strict';
//promise 

//синхронний код
console.log('Запит даних ...');

//Проміси
//створюєм проміс(обіцянка) яку поміщуємо в змінну req
// проміс може завершитись позитивно resolve і негативно reject
//resolve, reject - аргументи замість яких будуть підставлятись функції
// якщо все ОК функція resolve, якщо ні reject
const req = new Promise((resolve, reject) => {

//асинхронний код
setTimeout(() => {
       console.log('Підготовка даних ...');
       
       const product = {
           name: 'TV',
           price: 2000   
       };
       resolve(product);
       }, 2000);

});

//then- метод виконується на промісі коли ВДАЛО

req.then((product) => {
 //const req2 = new Promise((resolve, reject) => {
 return new Promise((resolve, reject) => {
       setTimeout(() => {
              product.status = 'order';
              //console.log(product);
              resolve(product);
            // reject(); //<-- ставимо помилку щоб спрацював кеч
            }, 2000);

 });
 // щоб використовувати 2й проміс
 //req2.then(data => {
    //   console.log(data);
 }).then(data => {
       data.modify = true;
       return data;
     //  console.log(data);
}).then(data => {
console.log(data); //{ name: 'TV', price: 2000, status: 'order', modify: true }

//reject - коли проміс завершився НЕвдало спрацює кеч
}).catch(() => {
console.error('Помилка');

//finally - дії які відбудуться в любому випадку
// чи все виконано - then  чи не виконано - reject
//Finally - можна очищати форму наприклад
}).finally(() => {
console.log('Finally');//Finally
});



const test = time  => {
       return new Promise(resolve => {
        setTimeout(() => resolve(), time);
       });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));



