'use strict';
//https://ru.wikipedia.org/wiki/JSON
//https://ru.wikipedia.org/wiki/HTTP
//https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff


const person  = {
name: 'Alex',
tel: '+38000000',
// вложені обєкти
parent:{
     mom: 'Olga',
     dad: 'Mike'
}
};
// передати обєкт на сервер на бекенд
// перетворити потрібно

// змінює js в json - stringify 
// головне правило в JSON - всі сушності записані в " "
console.log(JSON.stringify(person));//{"name":"Alex","tel":"+38000000"}

//з JSON в JS - parse  = обєкт
console.log(JSON.parse(JSON.stringify(person))); //{ name: 'Alex', tel: '+38000000' }

// глибока копія обєкта
// 1 stringify перетворить обэкт в JSON
// 2 parse - JSON  в обєкт JS і помістить в clone
// clone не буде залежити від основного обєкту parent
const clone = JSON.parse(JSON.stringify(person));
clone.parent.mom = 'Ann';
console.log(person);// основний обєкт з Olga
console.log(clone);//  новий обєкт з Ann
