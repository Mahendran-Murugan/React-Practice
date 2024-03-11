import './App.css';
import { CRUD } from './components/CRUD';
function App() {
  // const handle = ()=>{
  //   console.log("Button Clicked From Child")
  // }
  return (
    <div className="App">
      {/* <MethodProps handle={handle}/> */}
      <CRUD/>
    </div>
  );
}

export default App;
