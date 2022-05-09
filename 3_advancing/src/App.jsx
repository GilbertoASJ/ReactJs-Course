import { useState } from 'react'

import ImagesTypes from './components/ImagesTypes' 
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import UserInfo from './components/UserInfo'
import Container from './components/Container'
import ExecuteFuncion from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

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

    function showWelcomeMessage() {
        alert('Seja bem vindo ao sistema');
    }

    // Variável para a elevação de state (state lift)
    const [message, setMessage] = useState()

    const handleSetMessage = (msg) => {

        setMessage(msg);
    }

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

            {/* Children props */}
            <Container testValue="Teste">
                <p style={{display: 'inline-block'}}>
                    Parágrafo teste
                </p>
            </Container>    

            {/* Executar função como prop */}
            <ExecuteFuncion myFunction={showWelcomeMessage} />

            {/* State Lift */}
            <Message msg={message} />
            <ChangeMessageState handleSetMessage={handleSetMessage} />

        </div>
    );
}

export default App;
