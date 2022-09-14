//імпортуємо з main

// one переіменовуємо в first
//import {one as first,two} from './main';

// використовуєм імпортоване
//console.log(`${one} and ${two}`);
// але цей код потрібно ЗБИРАТИ зборщиком модулів !!!
//console.log(first);


// щоб імпортувати ВСЕ і називаємо все data
//import * as data from './main';
// Доступ до one через data.one
//console.log(`${data.one} and ${data.two}`);
//data.sayHi();

import {
    one,
    two
} from './main.js';
console.log(`${one} and ${two}`);

// імпорт дефолт змінної sayHi
import sayHi from './main.js';
sayHi();