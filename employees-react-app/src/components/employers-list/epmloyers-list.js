import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

// data - дані з app.js 
const EmployersList = ({ data, onDelete,onToggleIncrease,onToggleRise }) => {
    // Приходить data - це масив з обєктами.Ці елементи перебираємо в 
    // середині map де кожен елемент в масиві як item. 
    // Наша Колбек функція буде повертати компонент в якому назначаються
    // пропси name i salary.Результатом новий масив сформований з колбек функції
    // В елемент лежить масив з компонентами, 1...2.3.4. EmployersListItem
    const elements = data.map(item => {
        //витягуєм id пропс, а всі інші оюєднуємо в itemProps
        const { id, ...itemProps } = item;
        return (       
        //   <EmployersListItem name={item.name} salary={item.salary}/>
       
        //Object spread operator
            <EmployersListItem
                // В компонент передаємо функцію

                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)} />
      )
    })

    

    return (
        <ul className="app-list list-group">
            {/* Пропси name i salary які передамо в employers-list-item */}
            {/* <EmployersListItem name="John C." salary={800} />
            <EmployersListItem name="Alex M." salary={3000}/>
            <EmployersListItem name="Carl W." salary={5000}/> */}

            {elements}
        </ul>
    )
}

export default EmployersList;