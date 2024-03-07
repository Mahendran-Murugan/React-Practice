import { useEffect } from 'react';
import './App.css';
import { Timer } from './components/Timer';
function App() {
  // const handle = ()=>{
  //   console.log("Button Clicked From Child")
  // }
  return (
    <div className="App">
      {/* <MethodProps handle={handle}/> */}
      <Timer/>
    </div>
  );
}

export default App;
