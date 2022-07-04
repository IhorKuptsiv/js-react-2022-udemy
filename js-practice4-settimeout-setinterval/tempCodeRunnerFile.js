
let id  = setTimeout(function log(){
  console.log('Hello');
  id = setTimeout(log, 500);
}, 500);