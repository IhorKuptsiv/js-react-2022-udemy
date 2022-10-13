import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/epmloyers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';


function App() {
    // імітація даних з серевера
    const data = [
        { name: 'John C.', salary: 800, increase:false, id:1 },
        { name: 'Alex M.', salary: 3000, increase:true, id:2},
        { name:'Carl W.', salary: 5000, increase:false, id:3}
    ];

    return (
        <div className="app">
            <AppInfo />
            
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
 
            </div>
            {/* В пропс data передаємо масив даних data */}
            <EmployersList data={data} />
            <EmployersAddForm/>
            
      </div>
    );
}

export default App;