import logo from './logo.svg';
import './App.css';
import {Props} from './components/deStructureProps'

function App() {
  return (
    <div className="App" style={{backgroundColor : 90  }}>
      <Props name = "Adam" age = "20"/>
      <Props name = "Guna" age = "20"/>
      <Props name = "Senthil" age = "20"/>
    </div>
  );
}

export default App;
