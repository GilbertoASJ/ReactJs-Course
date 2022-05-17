import './App.css';

import PrincipalForm from './components/PrincipalForm'

function App() {
    return (
        <div className="App">

            <h3>Forms</h3>
            <PrincipalForm currentUser={{email: 'johndoe@gmail.com', password: '***'}} />
        </div>
    );
}

export default App;
