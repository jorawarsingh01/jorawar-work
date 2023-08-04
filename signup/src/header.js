import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

function Header() {

    return (
        <>
      <headers>
        <div className="links">
        <a href="#" >logo</a>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/About'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/Contact'}>Contact</NavLink>
                </li>
            </ul>
        </nav>
        </div>
      </headers>
      </>
    )
  }
  
  export default Header;