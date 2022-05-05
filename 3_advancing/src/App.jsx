import ImagesTypes from './components/ImagesTypes' 
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'

import './App.css';

function App() {
    return (
        <div className="App">
            <h3>Seção 3 - Avançando em React</h3>
            <ImagesTypes />
            <ManageData />
            <ListRender />
            <ConditionalRender />
        </div>
    );
}

export default App;
