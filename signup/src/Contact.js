import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from './header';


function Contact() {
  const navigate = useNavigate();
  const gotoHome=()=>{
    navigate('/')
  }

  
  
  return (
    <>
    <Header/>
    <section>
      CONTACT PAGE
      <button onClick={gotoHome}>go to home</button>
    </section>
    </>
  );
}

export default Contact;