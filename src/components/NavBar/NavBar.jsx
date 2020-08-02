import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
  <nav>
  <div className='NavBar'>
      <Link to="/" className="title">Got Yo Back</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/aboutus" className="navPages">About Us</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/donations" className="navPages">Donations</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/resources" className="navPages">Resources</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {props.user ?
      <div>
        <span className="NavBar-welcome">Welcome, {props.user.name}!</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="" onClick={props.handleLogout} className="NavBar-link">LOG OUT</Link>
       
        </div>  
      :
      <div>
        <Link to="/login" className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
      </div>    
    }
    </div>
    </nav>
    
  );
};

export default NavBar;


      
        