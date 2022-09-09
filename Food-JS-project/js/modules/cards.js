function cards() {

    // -----------------CLASS -- Використовуємо класи для карточок

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            //свойства класу
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            //масив
            this.classes = classes;
            // в this.parent лежить DOM елемент
            this.parent = document.querySelector(parentSelector);
            // курс валют
            this.transfer = 27;
            this.changeToUAH();

        }
        //методи класу
        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        //render метод щоб створити верстку
        render() {
            const element = document.createElement('div');
            // дефоолтні дані, якщо нічого не передали
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                //classes масив, пройтись по кожному елементу
                this.classes.forEach(className => element.classList.add(className));
            }

            //innerHTML - динамічно створює структуру верстку
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                
          `;
            //помістити елемент на сторінку
            // получить батька
            this.parent.append(element);
        }
    }


    //      getResource('http://localhost:3000/menu')
    //     .then(data => {
    //       //деструктуризація обєкту з db.json 
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //        new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    //    });
    // });

    //------------------Axios
    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        });

}
module.exports = cards;