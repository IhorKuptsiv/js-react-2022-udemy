'use strict';
//map

 const user = {
     name: 'Alex',
    surname: 'Smith',
     birthday: '20/04/1993',
     showMyPublicData: function(){
         console.log(`${this.name} ${this.surname}`);
     }
 }

// з обєкта робимо масив з масивами
const userMap = new Map(Object.entries(user));
console.log(userMap);

// розширюємо Мар, трасформуємо з Мар в --- обєкт
// з масивоподібного обєкта --- обєкт
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);





 //console.log(typeof(Object.keys(user[0])));

const shops = [
    {rise: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]); 
//      ключ і значення
shops.forEach((shop, i) =>{
    map.set(shop, budget[i]);
})

// map.set(shops[0], 5000)
//    .set(shops[1], 15000)
//    .set(shops[2], 25000);


//console.log(map);
//console.log(map);
//console.log(map.get(shops[0]));
//console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;

//console.log(map.keys());

//метод map.keys()
// const goods = [];
// for (let shop of map.keys()){
//     //console.log(shop);
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);


// for (let price of map.values()){
//     console.log(price);
// }


// for (let [shop, price] of map.entries()){
//     console.log(price, shop);
// }


//4 forEach

// map.forEach((value, key, map) =>{
//     console.log(key, value);

// });

