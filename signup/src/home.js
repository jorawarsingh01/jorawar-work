import React from "react";
import { NavLink ,Navigate, useNavigate} from "react-router-dom";
import Header from "./header";

function Home() {
  const navigate = useNavigate();
  const gotoabout=()=>{
    navigate('/About')
  }
    return (
        <>
      <Header/>
      <section>
        HOME PAGE
        <button onClick={gotoabout}>go to About</button>
      </section>
      </>
    )
  }
  
  export default Home;