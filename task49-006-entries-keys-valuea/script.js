'use strict';

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values

const user = { // всі флаги по замовчуванню ТРУ
    name: 'Alex',
    surname: 'Smith',
  //  birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// якщо користувач вказує свою дату народженя, він може ввести її тільки 1 раз
//Object.defineProperty(user, 'birthday', {writable: false});//false
//Object.defineProperty(user, 'birthday', {value: prompt('Date?') ,enumerable:true, configurable:true});//false



// У кожного свойства обєкта є свої спеціальні атрубити/флаги

//writable - якщо тру - то свойства в обєкті можна змінити, якщо фолс тільки для читання

//enumerable - якщо тру - то свойства можна перечисляти в циклах

//configurable - якщо тру - свойства можна видалити а атрибути змінити


//--обєкт який ми використовуємо -  user і свойство флаги якого ми хочимо подивитись 'name'
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
 console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData', {enumerable:false});// виводимо тільки name surname без методів - {enumerable:false});
 for (let key in user) console.log(key)

 Object.defineProperties(user, {
    name: {writable: false,
    surname: false}
 })

// змінення параметрів

//Object.defineProperty(user, 'name', {writable: false});//false
//user.name = 'aadasda';// не можемо перезаписати
// Object.defineProperty(user, 'gender', {value: 'male'});// всі флаги фолс
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));


