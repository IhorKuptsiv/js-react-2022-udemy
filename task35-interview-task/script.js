'use strict';

'use strict';
// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5; alert( x++ );
//5 - Тому що інкремент превіксний, спочатку вивід потім ++


// •	Чему равно такое выражение: [ ] + false - null + true ?
//[ ] + false - null + true 
console.log(typeof([] + false)); //false - string , пустий масив це пуста стрінга
//стрінг і інший тип даних = стрінг
console.log([] + false - null); //NaN - при виконанні не матиматичних операцій
console.log([] + false - null + true); // NaN


// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1; 
let x = y = 2; // з право на ліво, у=2 потім х=у  тобто 2 ( послідовне присвоєння)
alert(x); // 2


// •	Чему равна сумма [ ] + 1 + 2?

console.log([ ] + 1 + 2);// "12" - [] пустий масив це стрінг, стрінг + 1 і +2 = 12



// •	Что выведет этот код: alert( "1"[0] )?

alert( "1"[0] );// 1 - нульовий елемент в стрінгу це 1
//alert( "123"[1] );  // 2


// •	Чему равно 2 && 1 && null && 0 && undefined ?

console.log(2 && 1 && null && 0 && undefined);// && - і один вираз тру і інши тру
// оператор && запинається на false -- null це фолс
// || чи запинається на тру


// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

console.log(!!( 1 && 2 ) === (1 && 2));// false - !! перетворює 1 2 в булін


// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
alert( null || 2 && 3 || 4 );// по таблиці приорітетів операторів
// && потім ||  - 3-  з null , ЧИ запинається на правді - 3
// 3  чи 4- 3 запинається на правді - 3


// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
const a = [1, 2, 3]; 
const b = [1, 2, 3];
//false  - різні 2 масиви


// •	Что выведет этот код: alert( +"Infinity" ); ?
alert( +"Infinity" );// + перед стрінгою - виведе ЧИСЛО - Infinity


// •	Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко");// посимвольне порівняння стрінгів
//false - по юнікоду символ

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе );
// 2- томущо ЧИ запинається на правді
// 0 це фолс, пустий стрінг це фолс, 2 це тру.
