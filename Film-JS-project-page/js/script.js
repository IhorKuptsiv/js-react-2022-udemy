/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1) Удалить все рекламные блоки со страницы (правая часть сайта)

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item =>{
    item.remove();
});

// adv.forEach(function (item){
//     item.remove();
// });

//2) Изменить жанр фильма, поменять "комедия" на "драма"
//promo__genre
genre.textContent = 'драма';


//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
poster.style.backgroundImage = 'url("img/bg.jpg")';


//4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
//5) Добавить нумерацию выведенных фильмов */
//очищуємо список фільмів
movieList.innerHTML = "";
//сортуємо по алфавіту
movieDB.movies.sort();

//всі елементи знаходяться в movieDB в свойстві movies
// перебираємо forEach, в середину поміщаємо колбек функцію з 2ма аргументами film, i
movieDB.movies.forEach((film, i) => {
   movieList.innerHTML += `
   <li class="promo__interactive-item">${i + 1} ${film}
     <div class="delete"></div>
   </li>
   `;
});
