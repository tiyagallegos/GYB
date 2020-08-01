import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
  <nav>
  <div className='NavBar'>
      <Link to="/" className="title">Got Yo Back</Link>
      {props.user ?
      <div>
        <Link to="" onClick={props.handleLogout} className="NavBar-link">LOG OUT</Link>
       
        <span className="NavBar-welcome">Welcome, {props.user.name}!</span>
        </div>  
      :
      <div>
        <Link to="/login" className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
      </div>    
    }
    </div>
    </nav>
    
  );
};

export default NavBar;


      
        