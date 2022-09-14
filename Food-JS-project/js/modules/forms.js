import {
    closeModal,
    openModal
} from './modal';
import {
    postData
} from '../services/services';




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

            postData('http://localhost:3000/requests', json)
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
        openModal('.modal', modalTimerId); // відкривання модальних вікон

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
            closeModal('.modal');
        }, 4000);
    }
}

//module.exports = forms;
export default forms;