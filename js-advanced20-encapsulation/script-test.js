'use strict';

class User {
  constructor(name, age){
    this.name = name;
    this.age = age; 
}
//const surname = 'Kuptsiv';

    say () {
    console.log(`Імя користувача:  ${this.name}, вік ${this.age}`);
  }

//   get age() {
//     return this.age;
//    }
 
//    set age(age) {  
//      this.age = age;
//  }
}
const ihor = new User ('Ihor', 30);

console.log(ihor.age);//30
//console.log(surname);
ihor.say(); //Імя користувача:  Ihor, вік 30




