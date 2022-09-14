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
export default calc;