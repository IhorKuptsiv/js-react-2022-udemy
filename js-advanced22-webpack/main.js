
function myModule() {
    this.hello = function() {
        console.log('hello');
    };
    this.goodbye = function(){
        console.log('bye!');
    };
}
//потрібно щоб функція myModule перейшла з файлу main.js ---> index.js
// де будемо використовувати її багато раз і використовувати її методи

//-------CommonJS 
module.exports = myModule;