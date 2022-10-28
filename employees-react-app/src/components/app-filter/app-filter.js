import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        { name: 'all', label: 'Всі працівники' },
        { name: 'rise', label: 'На повишення' },
        {name: 'moreThen1000', label:'З/П більше 1000$'}
    ];

    //на базі даних вище, формуємо масив елементів
    //перебираэмо через map і беремо name, label 
    const buttons = buttonsData.map(({ name, label }) => {
    // оприділяти активний елемент чи ні 
        //if props.filter === name - ми тоді повертаємо true в active
        const active = props.filter === name;
    // беремо active і перевіряємо його тернарним оператором
     // якщо true --- btn-light
     //якщо false ---  btn-outline-light
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        //повертаємо структуру з кнопкою
        return (
            <button
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
            {label}
        </button>   
         )
     })


    return (
        <div className="btn-group">
            {buttons}
            {/* <button
                className="btn btn-light"
                type="button">
                Всі працівники
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                На повишення
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                З/П більше 1000$
            </button> */}

        </div>
    )
}

export default AppFilter;