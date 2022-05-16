import './App.css';

import { useState } from 'react'

import ComponentCss from './components/ComponentCss/ComponentCss'


function App() {

    // Fictional var
    const n = 20;
    const [name] = useState('John Doe');

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
                    margin: '16px 0'
                }}
            >
                Exibir mensagem de boas-vindas
            </button>

            {/* Inline CSS dinâmico com if ternário */}
            <p style={n <= 15 ? {color: 'purple'} : {color: 'blue'}}>
                CSS inline dinâmico com if ternário
            </p>

            <p style={name === 'John Doe' ? {backgroundColor: '#ccc'} : null}>
                Nome dinâmico com useState
            </p>

        </div>
    );
}

export default App;
