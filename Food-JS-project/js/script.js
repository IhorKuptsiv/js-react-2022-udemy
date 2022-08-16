
// глобальний оброботчик собитій - DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {



  // ---------------TABS

    let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items'); 
// скриваємо Таби
function hideTabContent() {
            tabsContent.forEach(item => {
             // item.style.display= 'none';
             item.classList.add('hide');
             item.classList.remove('show', 'fade');
            });

            tabs.forEach(item =>{
              item.classList.remove('tabheader__item_active');
            });
        }
// показуємо таби
//    0 - це перший слайдер
        function showTabContent(i = 0) {
           // tabsContent[i].style.display = 'block'; 
           // додаємо клас фейд з анімецією
           tabsContent[i].classList.add('show', 'fade');
           tabsContent[i].classList.remove('hide');

            tabs[i].classList.add('tabheader__item_active');

        }

        // скриваємо всі слайдери
        hideTabContent();
        // показуємо 1й слайдер
        showTabContent();
         
        //Делегування подій, і оброботчик подій КЛІК
        // колбек функція
        tabsParent.addEventListener('click', function(event) {
          // target - щоб можна було завжди використовувати
          // event.target в інших част. коду
          const target = event.target;
           // перевірка на таргет і на contains що точно клікнули в ТАБ
           if(target && target.classList.contains('tabheader__item')) {
            // оприділити номер кожного табу і викликати функцію showTabContent 
            //перебиремо всі Таби через forEach. 
            // item - кожен ТАБ який буду перебирати
            // i - номер елементу ТАБУ по порядку
            tabs.forEach((item, i) => {
                //target-  той елемент в який клікнули
                //буде співпадати з елементом який перебираємо forEach 
                // будемо викликати 2 функції hideTabContent showTabContent
                if (target == item) {
              // скриваємо всі слайдери
              hideTabContent();
             // показуємо 1й слайдер. i - це номер табу який ми клікнули
             showTabContent(i);
              }
            });
            
          }
        });

//-------------TIMER
const deadline = '2022-07-11';


//функція визн. різницю між дедлайном і настоящим часом
function getTimeRemaining (endtime){
  let days,hours,minutes,seconds;
  // різниці між датами
  const t = Date.parse(endtime) - Date.parse(new Date());// переводимо стрінг в число, получимо к-сть. мілісекунд
      // якщо дата відємна тоді таймер = 0
  if(t <= 0){
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }else{
// кількість днів в таймері. мілісекунди поділити на / міліске в одномі дні
days = Math.floor(t / (1000 * 60 * 60 * 24)),//дны = мілісекунди * сек * год *24 год
hours = Math.floor((t / (1000 * 60 * 60) % 24)), //мілісек / на мілісек в 1 годині.   %24 залишок від 24
minutes = Math.floor((t / 1000 / 60) % 60),//t / 1000- сек,/ 60- хв, %60- залишви від 60
seconds = Math.floor((t / 1000) % 60);
  }
  
      // повертаємо обєкт з функції
     return{
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
    }

    // Додаємо 0 перед 8 9 7 6 
    function getZero(num){
      if ( num >= 0 && num <10){
        return `0${num}`;
      }else{
        return num;
      }
    }
    
    // встановлюємо таймер на сторінку
    function setClock(selector, endtime){ // блок таймер з html і час 
const timer = document.querySelector(selector),//timer
     days = timer.querySelector('#days'),
     hours = timer.querySelector('#hours'),
     minutes = timer.querySelector('#minutes'),
     seconds = timer.querySelector('#seconds'),
     // запускати функцію updateClock кожну секунду, 
     //таймер кожну секунду обновляюється
     timeInterval = setInterval(updateClock, 1000);// setInterval - запускає кожну секунду функцію

     updateClock();

     function updateClock(){
      // розрахунок часу який залишився
      const t = getTimeRemaining(endtime);
      // помістити на сторінку
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      //зупинаэмо таймер timeInterval
      // якщо час вже вийшов , 0 сек, зупиняємо
      if(t.total <= 0){
        clearInterval(timeInterval);
      }

     }
    }

    setClock('.timer', deadline);


  //-----------------MODAL (popup)

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal =document.querySelector('.modal');

        //функція відкриває вікно
      function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
     // modal.classList.toggle('show');// реалізація через toggle

       // зупинити скрол сторінки при відкритому вікні попап
       document.body.style.overflow = 'hidden';//CSS- overflow: hidden;
      //якщо користувач сам відкрив попап, через таймер попап не відкривається
      clearInterval(modalTimerId);
      }

        // функція відкриває модальне вікно
      modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
      });

      
      //псевдомасив
      //функція закриває вікно
      function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
     

        // дозволити скролл  сторінки при Закритому вікні попап
      document.body.style.overflow = '';//CSS- overflow по дефолту
      }
    

       // при кліці на пусте місце яке !modal_dialog закриваємо попап
       modal.addEventListener('click', (e) => {
          if (e.target === modal || e.target.getAttribute('data-close') == ''){
           //closeModal - функцію викликаємо, працює після умови
          closeModal();
          }
       });

       // закриваємо попап при кліці на ESC - keydown
       document.addEventListener('keydown',(e) => {
       if(e.code === "Escape" && modal.classList.contains('show')){
        closeModal();
       }
       });

       // визиваємо модальне вікно ( попап) через деякий час
       const modalTimerId = setTimeout(openModal, 50000);

       // функція щоб показувати 1 раз після скролу до низу сторінки
       function showModalByScroll (){
        if( window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
          openModal();
          //removeEventListener - видаляємо Listener, попап показуємо 1 раз після скролу
          window.removeEventListener('scroll', showModalByScroll);
         }
       }
       window.addEventListener('scroll', showModalByScroll );      
      
      
       // -----------------CLASS -- Використовуємо класи для карточок

       class MenuCard{
        constructor(src,alt,title,descr,price,parentSelector, ...classes){
          //свойства класу
          this.src = src;
          this.alt = alt;
          this.title = title;
          this.descr = descr;
          this.price = price;
          //масив
          this.classes = classes;
          // в this.parent лежить DOM елемент
          this.parent = document.querySelector(parentSelector);
         // курс валют
          this.transfer = 27;
          this.changeToUAH();

        }
        //методи класу
        changeToUAH(){
          this.price = this.price * this.transfer;
        }
        //render метод щоб створити верстку
        render(){
          const element = document.createElement('div');
          // дефоолтні дані, якщо нічого не передали
          if(this.classes.length === 0){
            this.element = 'menu__item';
            element.classList.add(this.element);
          }else{
            //classes масив, пройтись по кожному елементу
          this.classes.forEach(className => element.classList.add(className));
          }
          
          //innerHTML - динамічно створює структуру верстку
          element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                
          `;
          //помістити елемент на сторінку
          // получить батька
          this.parent.append(element);
        }
       }


       getResource('http://localhost:3000/menu')
      .then(data => {
        //деструктуризація обєкту з db.json 
        data.forEach(({img, altimg, title, descr, price}) => {
          new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
      });
  });


      //-------------------------------Forms

      // получаємо всі форми по тегу form
      const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

      //під кожну форму підвязати функцію postData
      
      // функція відповідає за постинг даних
      // буде приймати якусь форму/аргумент
      
      forms.forEach(item => {
        bindPostData(item);
    });

// url i data - дані які будуть поститись в функц.
//1. postData налаштовує запит
//2.  фетчить, тобто відправляє запит на серв, получає відповідь
//3. перетворює відповідь в json

// весь код асинхронний, коли запускається функц.postData
// ми робимо запит який іде на серв(асинхронний)
// але з фетча з серв нам ще нічого не повернулось, буде помилка
//async - в середині функції буде асинхр оператор
//await - ставимо перед тим де потрібно дочекатись відповіді
// async await завжди в ПАРІ
    const postData = async (url, data) => {
      // в середині поміщаємо проміс від фетча
      const res = await fetch(url, {
        method: "POST",// яким образом
        headers:{ // і що саме відправляємо
          'Content-type': 'application/json'
        },
       body: data
      });
      return await res.json();//проміс 

    };

    
    async function getResource(url) {
      let res = await fetch(url);

      if(!res.ok){
       // обєкт помилки
       throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }
       
      return await res.json();

    }
      
     function bindPostData(form){
      form.addEventListener('submit', (e) => {
      //відміняємо стандартну поведінку браузера
      // а саме обновлення сторінки при кліці на кнопку форми
      e.preventDefault();
      //Спінер
      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      //відправляємо statusMessage в HTML 
    
      //insertAdjacentElement - ставимо спінер після блоків
      form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);


   //метод entries повертає масив власних властивостей обєкта
   const json = JSON.stringify(Object.fromEntries(formData.entries()));

   postData('http://localhost:3000/requests', json)
    //.then(data => data.text())// що приходить від сервера
    .then(data => {// з сервера повертається якась data
   // колбек функція
   console.log(data);// в консоль що певернув сервер
   showThanksModal(message.success);// запуск функц. showThanksModal
   statusMessage.remove();// спінер видаляємо
    }).catch(() => { // якщо помилка
      showThanksModal(message.failure);
    }).finally(() => {// дії які виконуються завжди
      form.reset();// очистка форми
    });

      });

    }
     
    // красиві форми
    function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');
      prevModalDialog.classList.add('hide');// скриваємо контент
      openModal();// відкривання модальних вікон

      const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
      // верстка в вікні
      thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
      //помістити на сторінку HTML
      document.querySelector('.modal').append(thanksModal);
      
      // якщо користувач повторно відкриє вікно
      setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();
    }, 4000);
}
});
