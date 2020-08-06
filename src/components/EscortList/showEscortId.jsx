import React, { Component } from 'react';
import './EscortList';
import { Link } from 'react-router-dom';
import './showEscortId.css';

export default props => {
    return (
            <div classname="eIdContainer">
            <div className="escortId">
            <h1>Title:{props.escort.title}</h1>
            <p>Created By:{props.escort.createdBy}</p> 
            <p> Able Bodied:{props.escort.ableBodied} </p>
            <p> Vehicle:{props.escort.vehicle} </p>
            <p> Walking:{props.escort.walking} </p>
            <p> Location:{props.escort.location} </p>
            <p> Self Defense Training: {props.escort.selfDefenseTraining}  </p>
            <p> Availability: {props.escort.availability}</p>
            <p>  Details: {props.escort.details} </p>
            <p>Created At:{props.escort.createdAt.toLocaleString()}</p>
            
        
       
        <Link className="editLink" to={`/escorts/${props.escort._id}/edit`} onClick={() => props.handleEdit(props.id)}>✏️</Link>

        <span className="deleteEscortButton" onClick={() => props.handleRemoveEscort(props.escort._id)}>⛔️</span>
        
        <Link className="backLink" to="/">Back</Link></div>
        </div>
    );
}


