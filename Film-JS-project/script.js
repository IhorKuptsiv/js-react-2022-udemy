'use strict';

/* Задание на урок 4/ 31:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви переглянули?','');
       
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Скільки фільмів ви переглянули?','');
        }
       }
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt("Один з останніх фільмів які переглядали?",""),
        b = +prompt("На скільки оціните його?","");
    
    if(a != null && b !=null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies [a] = b;
        console.log('done');
    }else{
        console.log('error');
        i--;
    }
    }
}
rememberMyFilms();


function detectPersonalLevel (){
    if(personalMovieDB.count < 10){
        console.log( "Просмотрено довольно мало фильмов");
        }else if(personalMovieDB.count >=10 && personalMovieDB.count < 30){
        console.log ("Вы классический зритель");
        }else if (personalMovieDB.count >=30){
        console.log("Вы киноман");
        }else{
        console.log("Произошла ошибка");
        } 
}
detectPersonalLevel();

//2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
//false - выводит в консоль главный объект программы
function showMyDB(hidden){
if (!hidden){
    console.log(personalMovieDB);
}
}
showMyDB(personalMovieDB.privat);

//3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
//"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
//genres

function writeYourGenres (){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();