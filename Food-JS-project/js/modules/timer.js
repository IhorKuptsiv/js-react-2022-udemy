function timer() {
    //-------------TIMER
    const deadline = '2022-07-11';


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

    setClock('.timer', deadline);
}

module.exports = timer;