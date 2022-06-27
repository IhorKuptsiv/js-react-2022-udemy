"use strict";

const p = document.querySelectorAll('p');
console.log(p);




function loadScript(src){
  const script = document.createElement ('script');
  script.src = src;
  script.async = false;
  document.body.append();//append _ поміщає елемент в кінець себе
}

loadScript("test.js");
loadScript("some.js");