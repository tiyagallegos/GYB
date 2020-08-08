import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

export default props => {
    return (
        <div className="InfoContainer">
            <a href="https://lgbtq.arizona.edu/qtpoc-national-resources" target="_blank">QTPOC National Resources</a>
           <a href="https://everydayfeminism.com/2016/01/unique-queer-poc-struggles/" target="_blank">Comic </a>
        <Link className="backLink" to="/">Back</Link>
        </div>
    );
}


