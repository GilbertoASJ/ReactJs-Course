import { useState } from 'react'

import ImagesTypes from './components/ImagesTypes' 
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import UserInfo from './components/UserInfo'

import './App.css';

function App() {

    // Podemos passar os dados para as props por meio de variáveis, tanto comuns, quanto useState
    // const userName = "Fulano de Tal"
    const [currentUserName] = useState('Ciclano')

    return (
        <div className="App">
            <h3>Seção 3 - Avançando em React</h3>
            <ImagesTypes />
            <ManageData />
            <ListRender />
            <ConditionalRender />

            {/* Utilizando props em um componente */}
            <ShowUserName userName={currentUserName} />

            {/* Utilizando props com destructuring(desestruturação) */}
            <UserInfo name="José" age={20} address="SP" />
        </div>
    );
}

export default App;
