'use strict';
//Дати, час
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date


//const now = new Date();
//console.log(now);// дату і час, Т роздільник - 2022-07-08T14:08:46.258Z

// const now = new Date('2022-07-08');
// console.log(now);// Тільки дату 2022-07-08T00:00:00.000Z


//const now = new Date(2020, 5, 1, 20);
// місяці рахуються з 0 через це 5 стає 6
// година 17 - через часовий пояс +3 
//console.log(now);//2020-06-01T17:00:00.000Z


// Мілісикунди , Timestamp відлік від 1970 року
//const now = new Date();
//console.log(now);//1970-01-01T00:00:00.000Z - початок відрахунку

// --------get-получаємо компоненти дати 
// console.log(now.getFullYear());//2022
// console.log(now.getMonth());// 6 - місяць
// console.log(now.getDate());// 8 число
// console.log(now.getDay());// 5 - пятниця 
// console.log(now.getUTCHours());// місцевий час 18, по UTC 15
//console.log(now.getTimezoneOffset());// різниця між моїм поясом і UTC в хвивлинах = -180
//console.log(now.getTime());//1657294006850 -  кількість мілісекунд від 1970 року


//----------set-методи щоб встановити
//console.log(now.setHours(18));//1657294085303
//console.log(now.setHours(18,40))// години і хвилини;
//console.log(now);//2022-07-08T15:28:05.303Z
//console.log(now.setHours(40));// якщо задати 40 годин, то перейде на наступний день час
//console.log(now);



const now = new Date ('2022-07-08');
//new Date.parse('2022-07-08');// аналогічно

console.log(now.setHours(40));
console.log(now);


let start = new Date();
// дія щоб засікти тривалість часу роботи
for (let i  = 0; i < 100000; i++){
    let some = i ** 3;//i в степінь 3
}

let end = new Date();

console.log(`Цикл відпрацював за ${end - start} мілісекунд`);//42 мілісек, 8 мілісек










