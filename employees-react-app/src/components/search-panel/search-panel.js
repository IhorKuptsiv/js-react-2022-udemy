import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component{
// const SearchPanel = () => {
    constructor(props) {
        super(props);
        this.state = {
            term:''
        }
    }
  
    //onUpdateSearch -  локальна функція
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        //стан на верх
        //onUpdateSearch - приходить з app.js тобто іншого компоненту
        this.props.onUpdateSearch(term);
        }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Знайти співробітника"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
        )
}
}



export default SearchPanel;