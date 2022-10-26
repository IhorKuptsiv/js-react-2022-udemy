import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/epmloyers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


// function App() {
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                { name: 'John C.', salary: 800, increase:false, rise:true, id:1 },
                { name: 'Alex M.', salary: 3000, increase:true, rise:false, id:2},
                { name:'Carl W.', salary: 5000, increase:false, rise:false, id:3}
            ]
        
        }
        this.maxId = 4;
    }
    deleteItem = (id) => {
        //setState - за допомогою нього можна змінювати/видаляти
        this.setState(({data}) => {
           //видаленя елементу з масиву з обєктами
           //щоб знайти певний обєкт, нам потрібен його індекс
            //findIndex -  метод масиву приймає в себе колбек функцію
            // якщо функція поверне тру то з методу повертає номер елементу 
            // де спрацювала ця функція
            // якщо буде таке співпадіння то ми получимо індекс обєкта який треба видалити
            
            //const index = data.findIndex(elem => elem.id === id);
            // data.splice(index, 1); //ми змінили на пряму, але так не можна
            // return{data:data} //видалили на пряму, але так не можна
            
            //---------------1 спосіб роботи з іммутабельністю
            //потрібно створити новий месив але без непотрібного нам
            // берем від 0 до того що нам потрібно видалити
            //const before = data.slice(0, index);
            // берем від елемента що видалили і  до кінця масиву
            //const after = data.slice(index + 1);
            //створюєм новий масив ES6 
            //const newArr = [...before, ...after];
            //return { data: newArr }
            
            //------------------2 спосіб
            //берем масив, і фільтруємо зі створенням нового
            //беремо data.filter і перебираємо кожен обєки item
            //якщо item.id не рівний id то видаляємо цей елемент
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    // імітація даних з серевера
    // const data = [
    //     { name: 'John C.', salary: 800, increase:false, id:1 },
    //     { name: 'Alex M.', salary: 3000, increase:true, id:2},
    //     { name:'Carl W.', salary: 5000, increase:false, id:3}
    // ];


    //Додавання нових користувачів
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise:false,
            id: this.maxId++
        }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
    }
    // ----------------19 Підйом станів. State lifting
    // onToggleIncrease = (id) => {
       // console.log(`Increase this ${id}`);
        
       // this.setState(({ data }) => {
            // //отримуємо індекс елементу з яким будемо працювати
            // const index = data.findIndex(elem => elem.id === id);
            // //получаємо старий обєкт
            // const old = data[index];
            // //створюєм новий обєкт. беремо old і розгортаємо його
            // // після ...old, якщо пишемо нові свойства і вони існували
            // // вони будуть змінятись на нові
            // // беремо значення тру чи фолс в increase: !old.increase і міняємо навпаки
            // const newItem = { ...old, increase: !old.increase };
            // //розгортаємо data від 0 до індекса
            // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            // //з setstate повертаємо обєкт який буде мати свойства data в який поміщаємо newArr
            // return {
            //     data: newArr
            // }
        //})

        //-----------через MAP
        onToggleProp = (id,prop) => {
        //(  ) - повертаємо зразу обєкт  а не тільки повертаємо функцію
        this.setState(({ data }) => ({
      // повертаэмо обєякт в якого буде свойсто data
      //data це масив, коли використаємо map - сформуємо новий масив
      // item => {} - item це кожен окремий обєкт в середині нашого масиву 
      //коли цей лобкек проходиться по кожному нашому з обєктів - item  в середині data   
            data: data.map(item => { 
                //якщо item id співпав з id то ми 
                if (item.id === id) {
            // повертаємо новий обєкт і в нього включаємо всі свойства
            return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))  
    }
    // onToggleRise = (id) => {
    //     //console.log(`Rise this ${id}`);
    //     this.setState(({ data }) => ({
    //         data: data.map(item => { 
    //             //якщо item id співпав з id то ми 
    //             if (item.id === id) {
    //         // повертаємо новий обєкт і в нього включаємо всі свойства
    //         return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    render() {
       //получаємо кількість співробітників
        const employees = this.state.data.length;
        //скільки працівників іде на повишення
        //filter повертає новий масив
        //перебираємо item, повертаємо тільки тих працівників
        //які получають премію - item.increase
        const increased = this.state.data.filter(item => item.increase).length;
            return (
                <div className="app">
                    <AppInfo employees={employees} increased={increased}/>
                    
                    <div className="search-panel">
                        <SearchPanel />
                        <AppFilter />
         
                    </div>
                    {/* В пропс data передаємо масив даних data */}
                    <EmployersList
                        data={this.state.data}
                        // onDelete={id => console.log(id) } />
                        onDelete={this.deleteItem}
                        // onToggleIncrease={this.onToggleIncrease}
                      //  onToggleRise={this.onToggleRise} 
                      onToggleProp={this.onToggleProp}
                      />
                    <EmployersAddForm onAdd={this.addItem}/>
                    
              </div>
            );
}
}

export default App;