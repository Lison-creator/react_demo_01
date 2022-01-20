import logo from './logo.svg';
import Welcome from './components/welcome/welcome';
import Message from './components/message/message';
import './App.css';

function App() {
    return (
        <div className="App">
            <Welcome name="Oscar"/>

            <Message content="Hello" author="Lison"/>
            <Message content="Bonjour" author="Oscar"/>
            <Message content="Guten Morgen" author="Dumbledore"/>
        </div>
    );
}

export default App;