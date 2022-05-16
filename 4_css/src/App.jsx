import './App.css';

import ComponentCss from './components/ComponentCss/ComponentCss'

function App() {

    return (
        <div className="App">

            {/* CSS global */}
            <h3>React com CSS</h3>

            {/* Css de componente - ele vaza, é como se fosse global, por isso utilizar com cuidado, 
            sempre estilizando com classes ou id's */}
            <ComponentCss />
        </div>
    );
}

export default App;
