function modal() {
    //-----------------MODAL (popup)

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    //функція відкриває вікно
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');// реалізація через toggle

        // зупинити скрол сторінки при відкритому вікні попап
        document.body.style.overflow = 'hidden'; //CSS- overflow: hidden;
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
        document.body.style.overflow = ''; //CSS- overflow по дефолту
    }


    // при кліці на пусте місце яке !modal_dialog закриваємо попап
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            //closeModal - функцію викликаємо, працює після умови
            closeModal();
        }
    });

    // закриваємо попап при кліці на ESC - keydown
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // визиваємо модальне вікно ( попап) через деякий час
    const modalTimerId = setTimeout(openModal, 50000);

    // функція щоб показувати 1 раз після скролу до низу сторінки
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            //removeEventListener - видаляємо Listener, попап показуємо 1 раз після скролу
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

}

module.exports = modal;