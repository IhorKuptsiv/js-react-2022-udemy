import $ from 'jquery';

//document.querySelector ... в JS
//в jQuery   $('#btn');
//$ це функція по отриманню елемента
//$('#btn');
//const btn = $('#btn');
//console.log(btn);

//DOM content loaded  --- JS
//jquery -- $(document).ready()
$(document).ready(function () {
    //при наведені на 1шу кнопку буде змінюватись клас активності
    //з list-item на active з анімацією toggleClass
    //:first - перший елемент - jquery
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });
    //скриваємо всі парні зображення при кліці
    //eq 2 -третій елемент
    //on - оброботчик подій
    $('.list-item:eq(2)').on('click', function () {
        //парні зображення
        $('.image:even').fadeToggle('slow');
    });

    //анімація вручну, до 5 кнопки( eq4)
    $('.list-item:eq(4)').on('click', function () {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });

});