//https://developer.mozilla.org/ru/docs/Web/API/Event
//https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
//https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener

//const btn = document.querySelector('button'),
const btns = document.querySelectorAll('button'),

      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('Click');
// };
// addEventListener - слідкує за подією, click - назва, - () => колбек функція

let i = 0;

const deleteElement = (e) => {
   // e.target.remove();
   console.log(e.target);
 //  console.log(e.currentTarget);
   console.log(e.type);

//    i++;
//    if (i == 1){
//       btn.removeEventListener('click',deleteElement);

//    }
};

// btn.addEventListener('click',deleteElement);
// overlay.addEventListener('click',deleteElement);

//btn.removeEventListener('click',deleteElement);


// btn.addEventListener('click', (e) => {
//     //console.log(e.target);
//   //  e.target.remove();
//    // console.log('Hover');
// });


// як навісити подій на декалька кнопок, querySelectorAll --
// потім перебрати масив і тоді навісити події
btns.forEach(btn => {
    //                    тип,    обрободчик,   опція
    btn.addEventListener('click',deleteElement,{once:true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) =>{
    //відміняємо стандартний поведінку браузера
event.preventDefault();

console.log(event.target);

});

