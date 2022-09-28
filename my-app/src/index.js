//відповідає за роботу з React, JSX,
import React from 'react';
//дозволяє працювати з DOM на сторінці( вставляти React на сторінку)
//import ReactDOM from 'react-dom/client'; //REACT v18
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//JSX - JS/html/css зразу пишемо як виглядає і поводить себе елемент
const elem = <h2>Hello world</h2>;

//---------------React v17
//ReactDOM - запуск бібліотеки
//в метод render передаємо 2 аргументи
ReactDOM.render(
  // 1 аргумент - що ми будемо рендирити
  //StrictMode - строгий режим
  <React.StrictMode>
    <App />
  </React.StrictMode>,
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

