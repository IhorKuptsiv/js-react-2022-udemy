
// глобальний оброботчик собитій - DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {

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

        });