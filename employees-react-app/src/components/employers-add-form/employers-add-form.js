import './employers-add-form.css';

const EmployersAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Додайте нового співробітника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Яке в нього імя?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" />

                <button type="submit"
                        className="btn btn-outline-light">Додати</button>
            </form>
        </div>
    )
}

export default EmployersAddForm;