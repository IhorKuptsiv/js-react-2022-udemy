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
                { name: 'John C.', salary: 800, increase:false, id:1 },
                { name: 'Alex M.', salary: 3000, increase:true, id:2},
                { name:'Carl W.', salary: 5000, increase:false, id:3}
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
            id: this.maxId++
        }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }

        render() {
            return (
                <div className="app">
                    <AppInfo />
                    
                    <div className="search-panel">
                        <SearchPanel />
                        <AppFilter />
         
                    </div>
                    {/* В пропс data передаємо масив даних data */}
                    <EmployersList
                        data={this.state.data}
                        // onDelete={id => console.log(id) } />
                        onDelete={this.deleteItem} />
                    <EmployersAddForm onAdd={this.addItem}/>
                    
              </div>
            );
}
}

export default App;