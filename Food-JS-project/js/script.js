
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
        modal =document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');
      

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
      // modal.classList.toggle('show');// реалізація через toggle

        // дозволити скролл  сторінки при Закритому вікні попап
      document.body.style.overflow = '';//CSS- overflow по дефолту
      }
      //closeModal - функцію передаємо, працює після click
      modalCloseBtn.addEventListener('click', closeModal);

       // при кліці на пусте місце яке !modal_dialog закриваємо попап
       modal.addEventListener('click', (e) => {
          if (e.target === modal){
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
      // const modalTimerId = setTimeout(openModal, 5000);

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

       //створюєм новий обєкт і викликаємо метод render
      //  const div = new MenuCard();
      //  div.render();
      // коли тільки 1 раз використовуємо
       new MenuCard(
         //аргументи в середину класу передаємо
           "img/tabs/vegy.jpg",
           "vegy",
           'Меню "Фитнес"',
           'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
           9,
           '.menu .container',
           'menu__item',
           'big' //<div class="menu__item big">

       ).render();


       new MenuCard(
        //аргументи в середину класу передаємо
          "img/tabs/elite.jpg",
          "elite",
          'Меню "“Премиум”"',
          'Меню "“Премиум”" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
          14,
          '.menu .container',
          'menu__item'


      ).render();

      new MenuCard(
        //аргументи в середину класу передаємо
          "img/tabs/post.jpg",
          "post",
          'Меню "Постное"',
          'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
          21,
          '.menu .container',
          'menu__item'


      ).render();


      }); 