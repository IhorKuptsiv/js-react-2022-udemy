'use strict';

//https://learn.javascript.ru/constructor-new

//-------Застарілий синтаксис
// const num = new Number(3);
// console.log(num);//[Number: 3]

// const num2 = new Function(3);
// console.log(num2);//[Function: anonymous]


//констурктори нам потрібні для створення нових однотипних обєктів
//----------- ES 5

function User(name, id){
    //конструктор
    this.name = name;// в кожного користувача буде своє імя
    this.id = id;// в кожного користувача буде свій ІД
    this.human = true;
    // метод з функцією 
    // 1 раз створюєм метод і він буде в кожного потомка
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}
//prototype - можем додавати нові методи чи свойства в наш конструктор
// і вони будуть прототимну наслідуватись у потомків
User.prototype.exit = function(name){
    console.log(`Користувач ${this.name} вийшов`);
};

// функція User стала конструктором і за допомогою new створює новий обєкт
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();//Hello Ivan
alex.hello();//Hello Alex

console.log(ivan);//User { name: 'Ivan', id: 28, human: true } - обєкт
console.log(alex);//User { name: 'Alex', id: 20, human: true }



