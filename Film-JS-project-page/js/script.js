/* Задания на урок: 42
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

//DOMContentLoaded - загрузка скріпта після того як ДОМ структура загрузиться
document.addEventListener('DOMContentLoaded', () => {

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
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) =>{
        //preventDefault -  відміняє стандартну поведінку браузера
        // сторінка не буде обновлятись при кліці на кнопку
       event.preventDefault();

       let newFilm = addInput.value;
       const favorite = checkbox.checked;

       // якщо тру - тобто користувач щось ввів в інпут тоді кнопка активна.
       if(newFilm){
// берем newFilm  - і перевіряємо скільки символів там є 
//2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
      if (newFilm.length > 21){
        newFilm = `${newFilm.substring(0,22)}...`;
      }

      
//4) Если в форме стоит галочка "Сделать любимым" - 
//в консоль вывести сообщение: 
//"Добавляем любимый фильм"
if(favorite){
    console.log("Добавляем любимый фильм");
}

  //Новый фильм должен добавляться в movieDB.movies.
  movieDB.movies.push(newFilm);
  //5) Фильмы должны быть отсортированы по алфавиту 
  sortArr(movieDB.movies);

  createMovieList(movieDB.movies, movieList);
       }

    
       event.target.reset();


    });  
    
const deleteAdv = (arr) =>{
    arr.forEach(item =>{
        item.remove();
    });
};

    
    // adv.forEach(function (item){
    //     item.remove();
    // });
    

    const makeChanges = () => {
            //2) Изменить жанр фильма, поменять "комедия" на "драма"
    //promo__genre
    genre.textContent = 'драма';
    
    
    //3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    //Реализовать только при помощи JS
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    
    };
  
    
    //4) Список фильмов на странице сформировать на основании данных из этого JS файла.
    //Отсортировать их по алфавиту 
    //5) Добавить нумерацию выведенных фильмов */
    //очищуємо список фільмів
   
    const sortArr = (arr) => {
  arr.sort();
    };
    //сортуємо по алфавіту
   
    
    //всі елементи знаходяться в movieDB в свойстві movies
    // перебираємо forEach, в середину поміщаємо колбек функцію з 2ма аргументами film, i
    
    function createMovieList(films, parent){
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
              <div class="delete"></div>
            </li>
            `;
         });
         

// клас delete , перебираємо всі через forEach 

         document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () =>{
             btn.parentElement.remove();
          movieDB.movies.splice(i, 1);

           createMovieList(films, parent);

           });
         });
     
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});