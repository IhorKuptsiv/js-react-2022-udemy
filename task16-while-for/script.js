"use strict";
// цикли for /while
//https://learn.javascript.ru/while-for

let num = 50;

// поки num менше 77 ми виконуємо дію
//while(num <= 55){
//console.log(num);
//num++;
//}

//do{
//    console.log(num);
//    num++;
//}
//while (num <55);

//for(let i = 1; i < 8; i++){
//    console.log(num);
//    num++;
//}

for( let i = 1; i < 10; i++){
   if (i === 6){
      //брейл викидає на 5
      // break;
      // контіню пропускає 6 і іде далі
      continue;
   }
    console.log(i);
}
