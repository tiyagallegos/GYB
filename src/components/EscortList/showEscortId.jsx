import React from 'react';
import './EscortList';
import { Link } from 'react-router-dom';
import './showEscortId.css';

export default props => {
    return (
            <div classname="eIdContainer">
            <div className="escortId">
            <h1>Title:{props.escort.title}</h1>
            <p>Created By:{props.escort.createdBy}</p> 
            <p> Vehicle(Y/N):{props.escort.vehicle} </p>
            <p> Self Defense Training: {props.escort.selfDefenseTraining}  </p>
            <p> Vehicle(Y/N):{props.escort.vehicle} </p>
            <p> Availability: {props.escort.availability}</p>
            <p>  Details: {props.escort.details} </p>
            <p> Vehicle(Y/N):{props.escort.vehicle} </p>
            <p>Created At:{props.escort.createdAt.toLocaleString()}</p>
            
        
       
            <span onClick={() => props.handleEdit(props.id)}>✏️</span>   
        <span
        onClick={() => props.handleRemoveEscort(props.id)}>⛔️</span>
        <span>{props.text}</span>
        <Link className="backLink" to="/">Back</Link></div>
        </div>
    );
}
