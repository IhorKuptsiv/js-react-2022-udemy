'use strict';
//https://learn.javascript.ru/callbacks

function first(){
    //do something
    //затримка setTimeout 500- пів сек
    setTimeout (function(){
        console.log(1);
    }, 500);
}

function second (){
    console.log(2);
}
first();
second();

function learnJS(lang, callback){
    console.log(`Я вивчаю: ${lang}`);
    callback();
}
function done (){
console.log('Я пройшо цей урок');

}
//анонімна функція
learnJS('JS', done);