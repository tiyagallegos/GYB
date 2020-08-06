import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
  <nav >
    <div className="NavContainer">
  <div className='NavBar'>
      <Link to="/" className="title">Got Yo Back</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/aboutus" className="navPages">About Us</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/donations" className="navPages">Donate</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/resources" className="navPages">Resources</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {props.user ?
      <div>
        <span className="NavBar-welcome">Welcome, <strong>{props.user.name}</strong>!</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
    </div>
    <div className="mainPageLinksSection">
        <Link className="mainPageLinks" to='/requestForm' > Request a Homie  </Link> 
        
        <Link  className="mainPageLinks" to='/escortForm'>Be a Homie </Link>
        
        <Link className="mainPageLinks" to="/escorts">All Homies</Link>
        
        <Link className="mainPageLinks" to="/requests">All Requests</Link>
        </div>

        <div className="menu-btn">
            <div className="menu-btn-burger"></div>
        </div>
    </nav>
    
  );
};

export default NavBar;


      
        