'use strict';
//Rest оператор і параметри по замовчуванню

// spread - брав сущність і розкладав на окремі елементи
// rest окремі елементи обєднює в 1 масив

// ...rest -  rest оператор, завжди останній
//rest збирає все що залишилось і формує з кього масив
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

//basic rest [ 'operator', 'usage' ] <--- в масив
log('basic', 'rest', 'operator', 'usage');



//параметри по замовчуванню

//ES6 - basis = 2 - значення по замовчуваню
function calcOrDouble(number, basis = 2){
// || повертає першу правду, якщо basis відсутній береться 2
   // basis = basis || 2;
    console.log(number * basis);
}
calcOrDouble(3, 5);//15