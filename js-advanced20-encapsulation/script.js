'use strict';
//Encapsulation - Інкапсуляція
// Скривання від зовнішнього світу: змінникх, функції і тд.
// Обєкт є приватний, тільки методи обєкту мають доступ


//function User (name, age){
class User {
  constructor(name, age){
    this.name = name;
   // let userAge = age;
   // this.userAge = age;
   this._age = age; // _age  не доступні зовні

  

}

  //властивості
  //this.name = name;
  //this.age = age; // БЕЗ інкапсуляції, можна переписати
  //let userAge = age; // З інкапсуляцією , undefined, не доступна зовні
  //this.say = function() {
    say() {
    // console.log(`Імя користувача:  ${this.name}, вік ${this.age}`);
    console.log(`Імя користувача:  ${this.name}, вік ${this._age}`);

  }
  // метод getAge щоб отримати доступ при інкапсуляції
  //this.getAge = function() {
  getAge() {

   //return userAge;
   //return this.userAge;
   return this._age;


  }
  //метод setAge - шоб змінити вік при інкапсуляції
 // this.setAge = function(age) {
  setAge(age) {

    
    if(typeof age === 'number' && age > 0 && age <110){
   // userAge = age;
    //this.userAge = age;
    this._age = age;


  }else{
  console.log('Недопустиме значення');
  }
}
}

const ihor = new User ('Ihor', 30);
//console.log(ihor.name);// получаємо властивості
//console.log(ihor.age);
//console.log(ihor.userAge);
//console.log(ihor.getAge());

// змінюємо властивості
//ihor.age = 32;
//ihor.userAge = 32;
//ihor.setAge(31);//31
//ihor.setAge(300);//Недопустиме значення
//console.log(ihor.getAge());

//ihor.name = "Alex";


console.log(ihor.age);
ihor.userAge = 99;

ihor.say();//Ihor 30   //// Імя користувача:  Alex, вік 32
