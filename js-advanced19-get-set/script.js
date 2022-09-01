'use strict';
//GET SET - властивості/ свойства обєкта

//ОБЄКТ складається з :

//---------ВЛАСТИВОСТІ /свойства -- описує обєкт,характеристики

//Свойства ділиться на :
// ---дані(описують обєкт) і ---акцесори(позволяє присвоювати і получати значення)

//--------МЕТОДИ - що вміє обєкт

//get получають значення свойства
//set встановлюють значення


const persone = {
    name: "Alex",
    age: 25,
    
    //get получаємо значення
    get userAge(){ // тепер при виклику userAge за межами 
        return this.age; //будемо получати вік
    },
    //set встановлюємо
    set userAge(num){
      this.age = num;
    }
};

//console.log(persone.userAge);//25 ---get
console.log(persone.userAge = 30);
console.log(persone.userAge); //30 -- set