/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    //----------------------------Calc

    const result = document.querySelector('.calculating__result span');
    // фільтри
    let sex, height, weight, age, ratio;
    // дефолтні значення  sex = 'female';  
    if (localStorage.getItem('sex')) {
        let sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        let ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    // завантажуєм вибір фільтру з локалсторедж, якщо ні тоді дефолт значення
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        // перебираємо всі елементи
        elements.forEach(elem => {
            // забираємо клас активностів кожного алементу
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    // функцію яку будемо викликати 
    function calcTotal() {
        // якщо всі фільтри вибрані
        //хочаб 1 фільтр не вибрано - false і пишемо повідомлення
        if (!sex || !height || !weight || !age || !ratio) {
            // якщо хоч 1 фільтр відсутній, пишемо повідомлення
            result.textContent = '____';
            return; // щоб перервати достроково функцію
        }
        if (sex === 'female') {
            // Math.round -  округляэмо числа
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }

    }
    calcTotal();

    // получаємо статичну інфу
    function getStaticInformation(selector, activeClass) {
        //отримуємо всі div
        const elements = document.querySelectorAll(selector);

        // elements.forEach(elem => { -   виправляємо баг з кліком між кнопками калькулятора
        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                //якщо користувач вибрав  фізичну активність
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    // запамятовуємо вибір користувача
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    // запамятовуємо вибір користувача
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
                // console.log(ratio,sex);

                // перевіряємо активні кнопки
                elements.forEach(elem => {
                    // позбавляємо активності всі кнопки
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });

        //document.querySelector(parentSelector)
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    // функціяю обробляє кожен окремий інпут
    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);
        // оброботчик подій
        input.addEventListener('input', () => {
            // коли введені замість цифр букви, робимо червоний бордер
            //match - шукаємо регулярний вираз ,не число /\D/g глобально
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }


            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();
        });

    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}

//module.exports = calc;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {

    // -----------------CLASS -- Використовуємо класи для карточок

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
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
        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        //render метод щоб створити верстку
        render() {
            const element = document.createElement('div');
            // дефоолтні дані, якщо нічого не передали
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
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


    //       getResource('http://localhost:3000/menu')
    //     .then(data => {
    //        //деструктуризація обєкту з db.json 
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    //    });
    //  });

    //------------------Axios  
    // axios.get
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        });

}
//module.exports = cards;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");






function forms(formSelector, modalTimerId) {
    //-------------------------------Forms

    // получаємо всі форми по тегу form
    const forms = document.querySelectorAll(formSelector);
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


    function bindPostData(form) {
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

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
                //.then(data => data.text())// що приходить від сервера
                .then(data => { // з сервера повертається якась data
                    // колбек функція
                    console.log(data); // в консоль що певернув сервер
                    showThanksModal(message.success); // запуск функц. showThanksModal
                    statusMessage.remove(); // спінер видаляємо
                }).catch(() => { // якщо помилка
                    showThanksModal(message.failure);
                }).finally(() => { // дії які виконуються завжди
                    form.reset(); // очистка форми
                });

        });

    }

    // красиві форми
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide'); // скриваємо контент
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId); // відкривання модальних вікон

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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 4000);
    }
}

//module.exports = forms;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
 //функція відкриває вікно
 function openModal(modalSelector, modalTimerId) {
     const modal = document.querySelector(modalSelector);
     modal.classList.add('show');
     modal.classList.remove('hide');
     // modal.classList.toggle('show');// реалізація через toggle
     // зупинити скрол сторінки при відкритому вікні попап
     document.body.style.overflow = 'hidden'; //CSS- overflow: hidden;

     console.log(modalTimerId);
     //тільки якщо в нас є modalTimerId, тоді запускаємо очистику clearInterval
     if (modalTimerId) {
         //якщо користувач сам відкрив попап, через таймер попап не відкривається
         clearInterval(modalTimerId);
     }

 }




 //псевдомасив
 //функція закриває вікно
 function closeModal(modalSelector) {
     const modal = document.querySelector(modalSelector);
     modal.classList.add('hide');
     modal.classList.remove('show');


     // дозволити скролл  сторінки при Закритому вікні попап
     document.body.style.overflow = ''; //CSS- overflow по дефолту
 }



 function modal(triggerSelector, modalSelector, modalTimerId) {
     //triggerSelector, modalSelector - будемо використовувати при
     //  виклиці функції Modal
     //-----------------MODAL (popup)

     const modalTrigger = document.querySelectorAll(triggerSelector),
         modal = document.querySelector(modalSelector);

     // функція відкриває модальне вікно
     modalTrigger.forEach(btn => {
         btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
     });

     // при кліці на пусте місце яке !modal_dialog закриваємо попап
     modal.addEventListener('click', (e) => {
         if (e.target === modal || e.target.getAttribute('data-close') == '') {
             //closeModal - функцію викликаємо, працює після умови
             closeModal(modalSelector);
         }
     });

     // закриваємо попап при кліці на ESC - keydown
     document.addEventListener('keydown', (e) => {
         if (e.code === "Escape" && modal.classList.contains('show')) {
             closeModal(modalSelector);
         }
     });



     // функція щоб показувати 1 раз після скролу до низу сторінки
     function showModalByScroll() {
         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
             openModal(modalSelector, modalTimerId);
             //removeEventListener - видаляємо Listener, попап показуємо 1 раз після скролу
             window.removeEventListener('scroll', showModalByScroll);
         }
     }
     window.addEventListener('scroll', showModalByScroll);

 }

 //module.exports = modal;
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

 
 

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({
    //деструктуризація
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field
}) {
    //container - головний слайдер , slide кожен наступний

    //-------------------------2 варіант Slider
    let offset = 0; //відступ
    let slideIndex = 1;

    //отримання елементів з сторінки HTML
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        // ширина слайду
        width = window.getComputedStyle(slidesWrapper).width;

    //нумерація
    if (slides.length < 10) {
        //менеше 10 слайдів додаємо 0 перед числом 07 01 02 тд
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        // більше 10 слайдів, просто показуєм кількість слайдів
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    // задаємо для блоку ширину. 100 процентів і к-сть слайдів
    slidesField.style.width = 100 * slides.length + '%';
    //flex - всі фото в 1 рядок
    slidesField.style.display = 'flex';
    // transition - плавне переключення фото
    slidesField.style.transition = '0.5s all';
    // overflow ='hidden' - показуємо тільки 1 фото 
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    //position = 'relative'; 
    slider.style.position = 'relative';

    //обгортка для всіх точок
    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    //стилізуємо блок
    indicators.style.cssText = `
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
`;

    //помістити обгортку в середину слайдеру
    slider.append(indicators);

    //кількість слайдів відповідає кількості точок
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        //1 точка відповідає 1 слайду
        // кожній точні атрибу data-slide-to і нумерацію
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
box-sizing: content-box;
flex: 0 1 auto;
width: 30px;
height: 6px;
margin-right: 3px;
margin-left: 3px;
cursor: pointer;
background-color: #fff;
background-clip: padding-box;
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;
opacity: .5;
transition: opacity .6s ease;
`;
        //активна перша точка
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }



    //обробник подій NEXT ------->>
    next.addEventListener('click', () => {
        //кінцевий варіант зміщення
        //наш відступ offset буде рівний ширині слайдера width * кількість слайдів -1
        //500px - в число і відрзати 2 символи, забираємо в числа букви PX slice(0, width.length - 2)

        //replace - всі не числа в строці
        // \D - не числа , g - глобальність для всіх знаків
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            //означ. що до листали до кінця і повернутись на початок
            offset = 0;
        } else {
            // якщо не останній слайд --> зміщення
            offset += deleteNotDigits(width); //+width.replace(/\D/g, '');//.slice(0, width.length - 2);
        }
        //коли клікаємо вперед, здвигаємо слайд
        //`translateX(-${offset})` - зміщуємо в ліво фото
        slidesField.style.transform = `translateX(-${offset}px)`;

        //нумерація
        // якщо дойшов до кінця слайдера переходимо на початок тобто 1
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        //дотси
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
    });

    //обробник подій PREVIOS <<<-------
    prev.addEventListener('click', () => {
        //0 - коли перший слайд 
        if (offset == 0) {
            // переміщуємось в кінець
            //в offset записуємо останній слайд
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            //якщо був не перший слайд, віднімаємо 
            offset -= deleteNotDigits(width); //+width.replace(/\D/g, '');//.slice(0, width.length - 2);
        }
        //зміщення слайду
        slidesField.style.transform = `translateX(-${offset}px)`;

        //нумерація
        //коли на 1му слайді знаходимось
        if (slideIndex == 1) {
            //будемо зміщуватись в кінець
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        //дотси
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;

    });

    // кліки на дотси для переключення слайдів
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            //3 точка 3 слайд, 4 -4 тд
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);
            //зміщення слайду
            slidesField.style.transform = `translateX(-${offset}px)`;
            //змінюємо цифри індикатори
            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
            //дотси
            dots.forEach(dot => dot.style.opacity = '0.5');
            dots[slideIndex - 1].style.opacity = 1;

        });
    });

}

//module.exports = slider;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

//--------------------Slider
// ----------------------1 варіант

//отримання елементів з сторінки HTML
// const slides = document.querySelectorAll('.offer__slide'),
//       prev = document.querySelector('.offer__slider-prev'),
//       next = document.querySelector('.offer__slider-next'),
//       total = document.querySelector('#total'),
//       current = document.querySelector('#current');


// //індекс оприділяє положення слайду, 1й слайд - 1
// let slideIndex = 1;
// showSlides(slideIndex);

// if (slides.length < 10){
//   //менеше 10 слайдів додаємо 0 перед числом 07 01 02 тд
//   total.textContent = `0${slides.length}`;
// }else{
//   // більше 10 слайдів, просто показуєм кількість слайдів
//   total.textContent = slides.length;
// }

// //функція по показу і скриванню слайдів
// function showSlides(n) {
//   //після остан. слайду відкривається 1ший (вправо)
//      if(n > slides.length){
//       slideIndex = 1;
//      }
//      // з 1го слайду на останній (вліво)
//      if(n < 1){
//       slideIndex = slides.length;
//      }
//    // приховати всі слайди, показати тільки 1
//    slides.forEach(item => item.style.display = 'none');
//    slides[slideIndex - 1].style.display = 'block';

//    //поточний слайд
//    if (slides.length < 10){
//     //менеше 10 слайдів додаємо 0 перед числом 07 01 02 тд
//     current.textContent = `0${slideIndex}`;
//   }else{
//     // більше 10 слайдів, просто показуєм кількість слайдів
//     current.textContent = slideIndex;
//   }

// }
//   // змінюємо наш слайд індекс
//   function plusSlides(n){
//     showSlides(slideIndex += n);
//    }
//    // оброботчики подій на prev, next
//    prev.addEventListener('click', () => {
//     plusSlides(-1);
//    });
//    next.addEventListener('click', () => {
//     plusSlides (1);
//    });

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // ---------------TABS

    let tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);
    // скриваємо Таби
    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display= 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    // показуємо таби
    //    0 - це перший слайдер
    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block'; 
        // додаємо клас фейд з анімецією
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');

        tabs[i].classList.add(activeClass);

    }

    // скриваємо всі слайдери
    hideTabContent();
    // показуємо 1й слайдер
    showTabContent();

    //Делегування подій, і оброботчик подій КЛІК
    // колбек функція
    tabsParent.addEventListener('click', function (event) {
        // target - щоб можна було завжди використовувати
        // event.target в інших част. коду
        const target = event.target;
        // перевірка на таргет і на contains що точно клікнули в ТАБ
        if (target && target.classList.contains(tabsSelector.slice(1))) {
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
}

//module.exports = tabs;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
    //-------------TIMER
    //const deadline = '2022-07-11';


    //функція визн. різницю між дедлайном і настоящим часом
    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        // різниці між датами
        const t = Date.parse(endtime) - Date.parse(new Date()); // переводимо стрінг в число, получимо к-сть. мілісекунд
        // якщо дата відємна тоді таймер = 0
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            // кількість днів в таймері. мілісекунди поділити на / міліске в одномі дні
            days = Math.floor(t / (1000 * 60 * 60 * 24)), //дны = мілісекунди * сек * год *24 год
                hours = Math.floor((t / (1000 * 60 * 60) % 24)), //мілісек / на мілісек в 1 годині.   %24 залишок від 24
                minutes = Math.floor((t / 1000 / 60) % 60), //t / 1000- сек,/ 60- хв, %60- залишви від 60
                seconds = Math.floor((t / 1000) % 60);
        }

        // повертаємо обєкт з функції
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // Додаємо 0 перед 8 9 7 6 
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    // встановлюємо таймер на сторінку
    function setClock(selector, endtime) { // блок таймер з html і час 
        const timer = document.querySelector(selector), //timer
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            // запускати функцію updateClock кожну секунду, 
            //таймер кожну секунду обновляюється
            timeInterval = setInterval(updateClock, 1000); // setInterval - запускає кожну секунду функцію

        updateClock();

        function updateClock() {
            // розрахунок часу який залишився
            const t = getTimeRemaining(endtime);
            // помістити на сторінку
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            //зупинаэмо таймер timeInterval
            // якщо час вже вийшов , 0 сек, зупиняємо
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
    }

    setClock(id, deadline);
}

//module.exports = timer;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
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
    let res = await fetch(url, {
        method: "POST", // яким образом
        headers: { // і що саме відправляємо
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json(); //проміс 

};

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        // обєкт помилки
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();

}






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
//ES6 Modules









// глобальний оброботчик собитій - DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  // імпортуємо функцій
  // const tabs = require('./modules/tabs'),
  //   modal = require('./modules/modal'),
  //   timer = require('./modules/timer'),
  //   cards = require('./modules/cards'),
  //   calc = require('./modules/calc'),
  //   forms = require('./modules/forms'),
  //   slider = require('./modules/slider');

  // визиваємо модальне вікно ( попап) через деякий час
  const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 30000);

  // виклик функцій
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2020-06-11');
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])('form', modalTimerId);
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
    //обєкт який буде зберігати налаштування з файлу slider.js
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    slide: '.offer__slide',
    field: '.offer__slider-inner'
  });


});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map