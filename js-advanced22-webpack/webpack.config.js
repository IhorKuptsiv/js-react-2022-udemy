'use strict';

let path = require('path');

module.exports = {
  mode: 'development', // режим в якому працює webpack. development - швидше працює для розробки, production - для кінцевої зборки
  entry: './src/js/script.js',// файл з якого ми починаємо
  output: {  // файл виходу, файл який получиться в результаті
    filename: 'bundle.js',// назва файлу який буде
    path: __dirname + '/dist/js'//локація файлу бандл
  },
  watch: true,//тру - вебпек автоматично буде збирати наш проект

  devtool: "source-map",//зберігає сорси

  module: {}//модулі які можна підключити coffescript, typescrit,babel, sass,less
};
