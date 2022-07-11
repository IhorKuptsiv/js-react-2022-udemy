
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
        }); 