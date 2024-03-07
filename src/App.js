import './App.css';
import { MethodProps } from './components/MethodProps';
function App() {
  const handle = ()=>{
    console.log("Button Clicked From Child")
  }
  return (
    <div className="App">
      <MethodProps handle={handle}/>
    </div>
  );
}

export default App;
