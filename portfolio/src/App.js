import Heading from './heading';
import About from'./about';
import Portfolio from './portfolio';
import Contact from './contact';
import './style.css'


function App(){
  return(
    <div>
      <div className='nav'>
      <div className='navbar'>
             <a href='./about'>ABOUT</a>
            <a href="">PORTFOLIO</a>
            <a href="">CONTACT</a>
            </div>
            </div>
      <Heading></Heading>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <footer>@copyrights by jorawar singh</footer>
   </div>
  )
}
export default App