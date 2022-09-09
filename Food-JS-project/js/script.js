// глобальний оброботчик собитій - DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  // імпортуємо функцій
  const tabs = require('./modules/tabs'),
    modal = require('./modules/modal'),
    timer = require('./modules/timer'),
    cards = require('./modules/cards'),
    calc = require('./modules/calc'),
    forms = require('./modules/forms'),
    slider = require('./modules/slider');
  // виклик функцій
  tabs();
  modal();
  timer();
  cards();
  calc();
  forms();
  slider();

});