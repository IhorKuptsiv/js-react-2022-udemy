//import { Component } from 'react';
import './employers-list-item.css';

// Отримуємо пропси з employers-list
// const EmployersListItem = (props) => {
//    деструктуризація  ({name,salary})
//const EmployersListItem = ({ name, salary, increase }) => {
 const EmployersListItem = (props) => { 


//class EmployersListItem extends Component {
    //був ЛОКАЛЬНИЙ РІВЕНЬ----- перенесли на глобильний в app.js
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         rise: false
    //     }
    // }
    // onIncrease = () => {
    //     //callback використовувати Потрібно
    //     // в нас залежність від попереднього стану
    //     this.setState(({ increase }) => ({
    //         increase: !increase
    //     }))
    // }

    // onRise = () => {
    //     this.setState(({rise}) => ({
    //         rise: !rise
    //     }))
    // }


    //render() {
        //диструктуризація
        // const { name, salary, increase } = this.props;
        // const { name, salary, onDelete,onToggleIncrease,onToggleRise} = this.props;
        const { name, salary, onDelete,onToggleProp,increase,rise} = props;
        //increase - приходить не з пропсів а з стейтів
        //const {increase, rise} = this.state;
       

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
        }
    
        return (
            // <li className="list-group-item d-flex justify-content-between">
            <li className={classNames}>
                {/* <span className="list-group-item-label">John Smith</span> */}
                <span className="list-group-item-label"
                    onClick={onToggleProp}
                    data-toggle="rise"
                    style={{
                        // fontSize: 40, color: 'red',
                        // transition: 'all',
                        // WebkitTransition: 'all',
                        // msTransition: 'all'
                    }}>
                    {name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        // onClick={this.onIncrease}>
                        //onClick={onToggleIncrease}
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                        className="btn-trash btn-sm "
                    onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }   
//}

export default EmployersListItem;