import { useEffect } from 'react';
import './App.css';
import { StopWatch } from './components/StopWatch';
function App() {
  // const handle = ()=>{
  //   console.log("Button Clicked From Child")
  // }
  return (
    <div className="App">
      {/* <MethodProps handle={handle}/> */}
      <StopWatch/>
    </div>
  );
}

export default App;
