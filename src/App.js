import logo from './logo.svg';
import './App.css';
import {Props} from './components/props'

function App() {
  return (
    <div className="App" style={{backgroundColor : 90  }}>
      <Props name = "Adam">
        <h2>This is child</h2>
      </Props>
      <Props name = "Guna"/>
      <Props name = "Senthil"/>
    </div>
  );
}

export default App;
