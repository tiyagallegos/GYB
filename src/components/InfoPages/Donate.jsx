import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

export default props => {
    return (
        <div>
           <h1 className="infopages">Donate</h1>
           <img src="https://live.staticflickr.com/7693/17123251389_1881fb0ba2_k.jpg"></img>
        <Link className="backLink" to="/">Back</Link>
        </div>
    );
}


