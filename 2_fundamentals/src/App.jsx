// Components - podemos emitir a extensão se o arquivo for js
import FirstComponent from './components/FirstComponent'

// CSS
import './App.css';

function App() {
    return (
        <div className="App">
            <h2>Fundamentos React</h2>
            <FirstComponent />
        </div>
    );
}

export default App;
