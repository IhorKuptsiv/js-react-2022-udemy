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
 export default modal;

 export {
     closeModal
 };
 export {
     openModal
 };