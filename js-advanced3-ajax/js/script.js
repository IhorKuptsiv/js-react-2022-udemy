'use strict';
//AJAX
//https://developer.mozilla.org/ru/docs/Web/API/FormData/Using_FormData_Objects
//https://ilikekillnerds.com/2017/09/convert-formdata-json-object/
//https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest


//AJAX  реалізація за допомогою обєкта XML http request

//получення даних зі сторінки
const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');

      inputUah.addEventListener('input', () =>{
       const request = new XMLHttpRequest();
//method - get/post..., url - шлях до сервера(файл..)
//ajax - асинхронні по дефолту, async= тру по дефолту
//(method, url, async, login, pass)
//GET - запит на інф. від серевара
//POST - відпрвляємо дані
       request.open('GET', 'js/current.json');//Збирає налаштування які в мауб. дозволить запит
       // що саме відправляємо, http заголовки
       request.setRequestHeader('Content-type','application/json; charset=utf-8');
      // відправляємо запит
       request.send();

       //status: 404,0,200,403...error
       //statusText- ok, not found, created..
       //response: відповідь від сервера: 
       //readyState- статус запиту. 0- коли обєкт створений,
       // 1- коли опен метод викликаний, 
       //2 - сенд метод викликаний, 3 - загрузка , 4- done

       // відслудковує статус нашого запиту в даний момент
       request.addEventListener('readystatechange', () =>{
        // якщо наш статус readyState = 4 тобто DONE
        // і наш status = 200 - ОК
         if(request.readyState === 4 && request.status === 200){
            console.log(request.response);//JSON --"current": { "usd": 74
             // з JSON в звичайний обєкт
             const data = JSON.parse(request.response);
             //рахуємо курс і округлюємо до 2 елементів після коми toFixed(2);
             inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
         } else{
              inputUsd.value = "Щось пішло не так";
         }

       });

      });