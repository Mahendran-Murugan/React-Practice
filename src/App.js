import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Service } from './components/Service';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Product } from './components/Product';
// import { NavBarLink } from './components/NavBarLink';
import { NavBarUseLink } from './components/NavBarUseLink';
import { User } from './components/User';
import { SpecificUser } from './components/SpecificUser';
import { NoMatchRoute } from './components/NoMatchRoute';
import { MostViewed } from './components/MostViewed';
import { Trending } from './components/Trending';
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
        <Route path = "/product" element= {<Product/>}>
          <Route index element= {<MostViewed/>}/>
          <Route path = "most" element= {<MostViewed/>}/>
          <Route path = "trending" element= {<Trending/>}/>
        </Route>
        <Route path = "/user" element= {<User/>}>
          <Route path = ':userId' element = {<SpecificUser/>}/>
        </Route>
        <Route path = "*" element= {<NoMatchRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
