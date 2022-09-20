//ES6 поліфіл
require('es6-promise').polyfill();
// forEach поліфіл
import 'nodelist-foreach-polyfill';

//ES6 Modules
import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {
  openModal
} from './modules/modal';

// глобальний оброботчик собитій - DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  // імпортуємо функцій
  // const tabs = require('./modules/tabs'),
  //   modal = require('./modules/modal'),
  //   timer = require('./modules/timer'),
  //   cards = require('./modules/cards'),
  //   calc = require('./modules/calc'),
  //   forms = require('./modules/forms'),
  //   slider = require('./modules/slider');

  // визиваємо модальне вікно ( попап) через деякий час
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);

  // виклик функцій
  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerId);
  timer('.timer', '2020-06-11');
  cards();
  calc();
  forms('form', modalTimerId);
  slider({
    //обєкт який буде зберігати налаштування з файлу slider.js
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    slide: '.offer__slide',
    field: '.offer__slider-inner'
  });


});