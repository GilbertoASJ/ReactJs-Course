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

    const users = [
        {id: 1, name: 'Fulano', age: 19, address: 'SP', newUser: false},
        {id: 2, name: 'Ciclano', age: 22, address: 'SP', newUser: true},
        {id: 3, name: 'Beltrano', age: 40, address: 'AC', newUser: true}
    ]

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
            <UserInfo name="José" age={20} address="SP" newUser={true} />

            {/* Reutilização de componentes */}
            <UserInfo name="João" age={30} address="CE" newUser={true} />
            <UserInfo name="Maria" age={25} address="MG" newUser={false} />

            {/* Loop em array de objetos */}
            {users.map((user) => (
                
                <UserInfo 
                    key={user.id}
                    age={user.age} 
                    name={user.name} 
                    newUser={user.newUser} 
                    address={user.address} 
                />
            ))}
        </div>
    );
}

export default App;
