import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./header";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

   const gotoContact=()=>{
    navigate('/Contact');
  }

    return (

      <>
      <Header/>
      <section>
        ABOUT PAGE
        <button onClick={gotoContact} >go to contact</button>
      </section>
      </>
    )
  }
  
  export default About;