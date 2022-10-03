import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
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
            </button>

        </div>
    )
}

export default AppFilter;