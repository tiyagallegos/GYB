import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

export default props => {
    return (
        <div className="InfoContainer">
           <h1 className="infopages">Donate</h1><br/>
           <h3>Donate To QTPOC Community RideShare Fund</h3><br/>
           <p>This button links directly to a QTPOC fund where QTPOC are verified and able to use funds from the 
               account to link to any rideshare app, so they can get to and from destinations safely. Please consider putting
               a recurring donation on your calendar. Violence in our community is not a single occurence. Thank you for your donations!
           </p><br/>
           <button className="moneybutton">💰</button><br/>
           <img className="donateimg" src="https://live.staticflickr.com/7693/17123251389_1881fb0ba2_k.jpg"></img><br/><br/>
        <Link className="backLinkinfo" to="/">Back</Link>
        </div>
    );
}


