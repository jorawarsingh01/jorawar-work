import React from "react";
import Contact from "./Contact";
import About from "./about";
import Home from "./home";
import Error from "./error";
import './App.css';
import { BrowserRouter ,Route,Routes} from "react-router-dom";


function App() {
  return (
      <div>
      <div className='navbar'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
    
  )
}

export default App;
