
// Втрати памяті

//1 коли не використовуємо use strict
// і створюємо змінну без оголошення - smth = "string";
// ця змінна стає глобальною -window.smth = "string";
// function func (){
//   smth = "string";
// }

//2 забуті таймери
// вони зберігають ссилки на то з чим ми маємо працювати
// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function(){
//   if (node){
//     node.innerHTML = someRes;
//   }
// }, 1000);


//3 оброботчик подій на не існуючих елементах
// сучасні браузер будуть видаляти оброботчик подій
// якщо елемент на які вони були повішані видалений
// removeEventListener - Хорошим тоном використовувати

//4 замикання
//великий обєм памяті використовується в замикання функцій

function outer() {
  const potentionallyHugeArray = [];
  return function inner() {
    potentionallyHugeArray.push('Hello');
    console.log('Hello!');
  }
}
//в sayHello запишеться функція - inner
// в sayHello ссилка на масив potentionallyHugeArray через замикання
// він постійно в памяті
const sayHello = outer();


//5 ссилки на DOM елементи
//коли видаляємл обєкт з DOM
//він може залишатись в js

function createElement () {
  const div = document.createElement('div');
  div.id = 'test';
  //return div;
  document.body.append(testDiv);

}

//const testDiv = createElement();
createElement();
//document.body.append(testDiv); -- переміщаємо в верхню функцію

function deleteElement() {
  document.body.removeChild(document.getElementById('test'));
}
// видаляє з DOM верстки - function deleteElement()
//але в JS залишається - const testDiv = createElement();
deleteElement();
