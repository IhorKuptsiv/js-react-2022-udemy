'use strict';

//try catch

// try {
//   console.log('Normal'); //normal
//   console.log(a); //error, але дальше код працює
//   console.log('result');

// } catch (error) {
//   console.log('error');
//   console.log(error);
//   //до цього обєкту є 3 сущності: name, message, stack
//   console.log(error.name); //ReferenceError
//   console.log(error.message); // "a" is not defined
//   console.log(error.stack); // ReferenceError :a is not defined

// } finally { // код який виконається завжди, в любому випадку

// }
// //console.log(a); //помилка, дальше код не працює
// //Normal
// console.log('Still normal');


try {
  document.querySelector('.active').addEventListener('click', () => {
    console.log('click');
  });
} catch (e) {
  console.log(e);
}

console.log('normal');

//на index.html получаємо
//normal
//2​ click

//на contacts.html получаємо
//Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
//at script.js:25:34