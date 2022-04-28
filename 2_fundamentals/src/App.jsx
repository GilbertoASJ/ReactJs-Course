// Components - podemos emitir a extensão se o arquivo for js
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import ReusedComponent from './components/ReusedComponent'

// CSS
import './App.css';

function App() {
    return (
        <div className="App">
            <h2>Fundamentos React</h2>
            <FirstComponent />
            <TemplateExpressions />
            <ReusedComponent />
        </div>
    );
}

export default App;
