'use strict';

//https://www.w3schools.com/jsref/prop_style_csstext.asp

//динамічна типізація - можливість одного типу даних стати іншим
//наприклад чисто може стати стрінгою і навпаки

//To String

//1  null to String
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2 Конкатинація  - складання стрінги з чимось ( число наприклад)
console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);
const fontSize = 26 + 'px';

// To Number

//1
console.log(typeof(Number('4')));

//2 Унарний плюс, знак плюс який ставлять перед іншим типом даних

console.log(typeof(Number(+'4')));

//3 parseInt

console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// To boolean

//1 Що завжди false
//0, '', null, undefined, NaN;

let switcher = null;
// null - false не працює
if (switcher){
  console.log('Working...');
}
// 1 - це тру - працює
switcher = 1;
if (switcher){
  console.log('Working...');
}