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

            {/* Inline CSS */}
            <button 
                onClick={() => alert('Seja bem vindo ao sistema')}
                style={{
                    border: 0,
                    borderRadius: '8px',
                    backgroundColor: '#222',
                    color: '#fff',
                    padding: '8px 16px',
                    marginTop: '16px'
                }}
            >
                Exibir mensagem de boas-vindas
            </button>
        </div>
    );
}

export default App;
