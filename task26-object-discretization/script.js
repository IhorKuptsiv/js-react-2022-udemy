'use strict';
//https://learn.javascript.ru/descriptors-getters-setters
//https://learn.javascript.ru/object-for-in
//https://javascript.ru/tutorial/object/intro


//const obj = new Object();
const options = {
// ключ і значення
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
       border: 'black',
       bg: 'red'
    },
    // Власний метод
    //обєкти ключ і значення
    makeTest: function(){
        console.log("Test");
    }
};
// запускаємо власний метод
options.makeTest();

//Деструктуризація
const {border, bg} = options.colors;
console.log(border);

//console.log(Object.keys(options).length);

//console.log(options.name);
//видаляємо
//delete options.name;
//console.log(options);

// let counter = 0;
// //перебрати всі свойства обєкта
// // працює цикл стільки раз скільки свойства є в обєкті :name, width...
// for(let key in options ){
//     if(typeof(options[key]) === 'object'){
//         for( let i in options[key]){
//             console.log(`Свойства ${i} має значення ${options[key][i]}`)
//         }
//         }else{
//             console.log(`Свойства ${key} має значення ${options[key]}`)
//             counter++;
//     }
//   // кожен раз будемо получати значення ключа
//   // який перебирається в цьому циклі
//   //для перебору обєктів
// }
// console.log(counter);





