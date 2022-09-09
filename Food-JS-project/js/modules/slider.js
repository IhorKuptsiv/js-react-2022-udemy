function slider() {

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


    //-------------------------2 варіант Slider

    //отримання елементів з сторінки HTML
    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        // ширина слайду
        width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0; //відступ

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

module.exports = slider;