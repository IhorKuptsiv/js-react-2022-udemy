'use strict';
//https://bitsofco.de/for-in-vs-for-of/
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
//https://stackoverflow.com/questions/14379274/how-to-iterate-over-a-javascript-object
//https://www.javascripttutorial.net/es6/javascript-iterator/

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
}
//for in - перебирає обєкт, масив, стрінгу
//перебирає НЕ по порядку
// for (const key in user) {
//     console.log(user[key]);
// }



// const arr = ['b', 'a', 'c']
// for (const key in arr) {
//     console.log(arr[key]);
// }


// const str = 'string';
// for (const key in str) {
//     console.log(str[key]);
// }

//for of - проходить по значеннях обєкту
const arr = ['b', 'a', 'c'];

Array.prototype.someMethod = function(){
    
};

console.dir(arr);

for (const key of arr) {
    console.log([key]);
}




const saleries = {
    john: 500,
    ivan: 100,
    ann: 5000,
    sayHello: function(){
        console.log('Hello');
    }
}
// перебор обєкта
// щоб обєкт saleries можна було перебрати через for of
// потрібно додати [Symbol.iterator] 

saleries[Symbol.iterator] = function(){
    return {
        current: this.john,
        last: this.ann,
        next(){
            //умова яка котролюєє перебор по 500 одиниць
            if (this.current < this.last){
                // перебор по 500 одиниць
                this.current = this.current + 500;
                // буде повертатись цей обєкт поки this.current < this.last
                return{done: false, value: this.current}
                }else{
                    return{ done: true}
                }
            }



           // {done: true, value: 123}
        }
    }

    // for( let res of saleries){
    //     console.log(res);

    // }

    const iterator = saleries[Symbol.iterator]();
    console.log(iterator.next());