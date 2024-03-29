import { Component } from 'react';
//import './employers-add-form.css';
import './employers-add-form.scss';

// const EmployersAddForm = () => {
class EmployersAddForm extends Component {
    // constructor(props) {
    //     super(props);
        // this.state = {
       state = {
            name: '',
            salary: ''
        }
   // }
        onValueChange = (e) => {
            this.setState({
            [e.target.name] : e.target.value
        })
    }

    //18----------додавання нового працівника
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary:''
            })
    }
    
    // ------28. static method
    static onLog = () => {
        console.log('Hey. I am static');
    }
    //властивості 
    static logged = 'on';

    
    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Додайте нового співробітника </h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Яке в нього імя?"
                        name="name"
                        value={name}
                    onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                    onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Додати</button>
                </form>
            </div>
        )
    }
}

// -------28.  static method 
EmployersAddForm.onLog();
// властивості
console.log(EmployersAddForm.logged);

export default EmployersAddForm;