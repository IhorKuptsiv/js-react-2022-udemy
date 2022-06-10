'use strict';
//P.S. Функции вызывать не обязательно*/


let numberOfFilms;
//1) Первую часть задания повторить по уроку
function start (){
 numberOfFilms = +prompt('Скільки фільмів ви переглянули?','');

 while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Скільки фільмів ви переглянули?','');
 }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
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