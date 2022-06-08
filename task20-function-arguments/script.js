"use strict";
// Аргументи функцій

const usdCurr = 28;
const eurCurr = 32;

//DRY - dont repeat your code
//               ( аргумент функції )
function convert (amount, curr){
    console.log(curr*amount);
}

convert(500,usdCurr);
convert(500, eurCurr);

