'use strict';

const btnPhone = document.querySelector('#iphone'),
    btnMacbook = document.querySelector('#macbook'),
    images = document.querySelectorAll('img');


// const phoneAnimation = images[0].animate([
//     //масив обєктів з лючовими кадрами
//     // початкова точка, середня і кінцева
//     //анімація вверх і вниз
//     {
//         transform: 'translateY(0)'
//     },
//     {
//         transform: 'translateY(100px)'
//     },
//     {
//         transform: 'translateY(-100px)'
//     },
//     {
//         transform: 'translateY(0)'
//     }
// ], {
//     duration: 3000, //час 3 сек
//     iterations: Infinity //анімація триває вічно
// });


let phoneAnimation;
//btnPhone - перша кнопка,
//addEventListener - оброботчик подій
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            //масив обєктів з лючовими кадрами
            // початкова точка, середня і кінцева
            //анімація вверх і вниз
            {
                transform: 'translateY(0) rotate(0deg)',
                filter: 'opacity(100%)'
            },
            {
                transform: 'translateY(100px) rotate(180deg)',
                filter: 'opacity(50%)'
            },
            {
                transform: 'translateY(-100px) rotate(270deg)',
                filter: 'opacity(75%)'
            },
            {
                transform: 'translateY(0) rotate(360deg)',
                filter: 'opacity(100%)'
            }
        ], {
            duration: 3000, //час 3 сек
            iterations: Infinity //анімація триває вічно
        });
    } else if (phoneAnimation.playState === 'paused') {
        //якщо на паузі, вкючаємо анімацію
        phoneAnimation.play();
    } else {
        //ставимо на пайзу
        phoneAnimation.pause();
    }
});