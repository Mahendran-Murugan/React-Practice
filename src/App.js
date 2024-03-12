import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Service } from './components/Service';
import { Contact } from './components/Contact';
import { About } from './components/About';
// import { NavBarLink } from './components/NavBarLink';
import { NavBarUseLink } from './components/NavBarUseLink';
function App() {
  // const handle = ()=>{
  //   console.log("Button Clicked From Child")
  // }
  return (
    <div className="App">
      {/* <MethodProps handle={handle}/> */}
      {/* <NavBarLink/> */}
      <NavBarUseLink/>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/about" element= {<About/>}/>
        <Route path = "/contact" element= {<Contact/>}/>
        <Route path = "/service" element= {<Service/>}/>
      </Routes>
    </div>
  );
}

export default App;
