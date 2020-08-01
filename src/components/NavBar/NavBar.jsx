import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
  <nav>
  <div className='NavBar'>
      <Link to="/" className="title">Got Yo Back</Link>
      <Link to="/" className="navPages">About Us</Link>
      <Link to="/" className="navPages">Donations</Link>
      <Link to="/" className="navPages">Resources</Link>
      {props.user ?
      <div>
        <span className="NavBar-welcome">Welcome, {props.user.name}!</span>
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


      
        