//відповідає за роботу з React, JSX,
import React from 'react';
//дозволяє працювати з DOM на сторінці( вставляти React на сторінку)
//import ReactDOM from 'react-dom/client'; //REACT v18
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//JSX - JS/html/css зразу пишемо як виглядає і поводить себе елемент
//const elem = <h2>Hello world</h2>; //Babel переводить цей варіант в другий
//БЕЗ JSX. Просто react + JS
//1 аргумент: назва елементу
//2гий аргумент: назва класу css( якщо немає то null)
//3й: вміст нашого тегу
// const elem = React.createElement('h2',{className: 'greetings'},'Hello world');

// //Метод React.createElement-- повертає такий обєкт
// const element = {
//   //типу - заголовок
//   type: 'h2',
//   //props - властивості елемента
//   props: {
//     className: 'greeting',
//     children: 'Hello world!'
//   }
// };


//цей кусок коду є React element
//якщо елемент маєбагато строкову структуру(декілька тегів) 
// тоді обгортаємо його в (   )

// <h2>Text: {new Date}</h2> - помилка - не можимо помістити обєкти
//масив зложується( конкатинація)

//атрибути пишуть в форматі кемелКейс
// (  ) --  завжди використовувати коли багаторядкова структура
// <div> </div> --- завжди використовувати для обгортування всієї структури
// <button/> -- закривати теги! які самозикривающі
// { }-- можна поміщати все крім обєктів
//--!!!---спеціальні атрибути className->>class в html ///htmlFor-->for в html
const text = 'Hello world'
const elem = (
  <div>
    <h2 className='text'>Text: {text}</h2>
    <h2>Text2: {2 + 2}</h2>
    <h2>Text3: {['1111', '22222']}</h2>
     <label htmlFor=""></label>
    
    <input type="text" />
    <button>Click</button>
    <button tabIndex="0"> Click2</button>
    <button/>
</div>
);


//---------------React v17
//ReactDOM - запуск бібліотеки, повинна запускатись 1 раз з самого верху
//в метод render передаємо 2 аргументи
ReactDOM.render(
  // 1 аргумент - що ми будемо рендирити
  //StrictMode - строгий режим
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  elem,
  //2 аргумент - куди поміщаємо
  // root - в файлі index.html
  document.getElementById('root')
);


//---------------React v18
//Бібліотека ReactDOM - витягується з client частини
//createRoot - створює корневий вузол 
//document.getElementById('root')); - селектор який хочемо отримати зі сторінки
// і туди помістити наш додаток ( index.html)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// //render - щоб відмалювати структуру
// root.render(
//   <React.StrictMode>
//   <App />
//   </React.StrictMode>
// );

