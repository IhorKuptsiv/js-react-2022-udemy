'use strict';
// http://jsraccoon.ru/es6-classes

// трансплітер babel з es6 в старий

// клас - красива обгортка функцій конструкторів
// ООП -  КОНЦЕПЦІЯ 
class Rectangel {
   // зоб скостроювати клас
   constructor(height, width){// аргументи які будуть приходити
    //свойство обєкту
    this.height = height;
    this.width = width;

   }
   //методи
   calcArea(){
      // що будемо робити
      return this.height * this.width;
   }
}


// ООП - НАСЛІДУВАННЯ від класу Rectangel
class ColoredRectangleWithText extends Rectangel{
   //конструктор з аргументами
 constructor(height,width,text,bgColor){
   // щоб не писати з класу Rectangel свойства
   // this.height = height;    this.width = width;
   // в нас є super метод
   //super - викликає супер конструктор батька
   // super - завжди на першому місці!!!!
   super(height,width);//height,width з батьківського класу
    this.text = text;
    this.bgColor = bgColor;
    
 }

   showMyProps(){
      console.log(`Текст: ${this.text}, колір: ${this.bgColor}`);
   }
 
}

const div = new ColoredRectangleWithText(25, 10, 'Heeello', 'red');//Текст: Heeello, колір: red
div.showMyProps();
console.log(div.calcArea());


// ООП -  ЕКЗЕМПЛЯР 
// використовуємо клас
// const square = new Rectangel(10, 10);
// const long = new Rectangel(20, 100);

// console.log(long.calcArea());//2000
// console.log(square.calcArea());//100

