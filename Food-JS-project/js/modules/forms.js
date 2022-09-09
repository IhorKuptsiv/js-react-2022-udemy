function forms() {
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
        openModal(); // відкривання модальних вікон

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
}

module.exports = forms;