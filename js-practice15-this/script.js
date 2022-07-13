'use strict';

//https://tproger.ru/translations/javascript-this-keyword/

//this - контекст виклику функції

// функції можуть викликатись 4ма способами

// //1 виклик функції
// // звичайна функція: this = window, якщо use strict - undefind
// function showThis() {
//     console.log(this);//window глобальний обєкт в браузері без use strict
// // з use strict - undefind
// }
// showThis();



// function showThis(a,b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//        // return this.a + this.b;
//        return a + b;//замикання
//     }
//     console.log(sum());
// }
// showThis(4,5);

//2 Методи обєкта - також функції
// Якщо ми використов. метод в середині обєкт
// то контекст у методів обєкта буде сам обєкт
// const obj = {
//     a:20,
//     b:15,
//     sum: function(){
//         //{ a: 20, b: 15, sum: [Function: sum] }
//         //console.log(this);
//         function shout(){
//             console.log(this);//undefined
//         }
//         shout();
//     }
// };
// obj.sum();


//3 Функції констуктори - через оператор new
//!!! - -this в конструкторах і класах - це новий екземпляр обєкту

//функція констуркто
// коли буде викликана вона створить новий обєкт
// function User(name, id){
// // свойства які звертаються через this до обєкту new User('Ivan'
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log("Hello" + this.name);
//     };
// }
// let ivan = new User('Ivan', 23);


//4 Ручне присвоєння this любій функції
//Ручна привязка this: call, apply, bind

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//    name : 'John'
// };

// //метод call - в середину передаэмо user що хочемо передати
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// //створює НОВУ функцію і під неї підвязує контекст
// function count (num){
//     return this*num;
// }
// // в змінну double поміщаємо НОВУ функцію
// const double = count.bind(2);// подвоюєм число
// console.log(double(3));//6
// console.log(double(13));//26


//Оброботчики собитій

//коли в нас оброботчик подій який іде як колбек функція -  console.log(this);
// написаний в класичному режимі - ('click', function(){
// в такому випадку контекст виклинку буде сам елемент -<button></button>
// const btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//    console.log(this);//<button></button>
// });


   const btn = document.querySelector('button');
// в оброботчиках подій коли ми використовує звичайну функці.
// у нас є доступ до this
//якщо стрілочна функція --this буде undefind
 //btn.addEventListener('click', function(){
 btn.addEventListener('click', (e) =>{ //undefind 
    e.target.style.backgroundColor = 'red';// червона
   //this.style.backgroundColor = 'red';// червона кнопка
 });


// стрелочні функції як працюють з контекстом виклику
// стрелочні функції не має свого контекст виклику
// вона завжди бере в свого батька

const obj = {
    num: 5,
    sayNumber: function(){
        // якщо звичайна фунція буде - undefind
        // якщо стрілочна контест бере в батька - тобто метод  sayNumber: 
        // в метода контекст на обєкт - obj
       const say = () => {
        
        //console.log(this);// { num: 5, sayNumber: [Function: sayNumber] }
        console.log(this.num);//5
    };

       say();
    }
};

obj.sayNumber();


// //  в класичному варіанті 
// const double = (a) => {
//    return a * 2; 

// };

//-----------VS---------
//const double = (a, b) => a * 2;


//-----VS---- стрілочна функція з 1 аргументом
// const double = a => a * 2;

// console.log(double(4)); //8
