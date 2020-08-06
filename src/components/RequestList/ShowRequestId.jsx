import React, { Component } from 'react';
import './RequestList';
import { Link } from 'react-router-dom';
import './ShowRequestId.css';

export default props => {
    return (
            <div classname="rIdContainer">
            <div className="requestId">
            <h1>Title:{props.request.title}</h1>
            <p>Created By:{props.request.createdBy}</p> 
            <p> Able Bodied: {props.escort.ableBodied}</p>
            <p> Danger Level:{props.escort.dangerLevel} </p>
            <p> Location: {props.escort.location} </p>
            <p>Details: {props.escort.details} </p>
            <p>Created At:{props.escort.createdAt.toLocaleString()}</p>
            
        
       
        <Link className="reditLink" to={`/requests/${props.request._id}/edit`} onClick={() => props.handleEditRequest(props.id)}>✏️</Link>

        <span className="rdeleteEscortButton" onClick={() => props.handleRemoveRequest(props.request._id)}>⛔️</span>
        
        <Link className="rbackLink" to="/">Back</Link></div>
        </div>
    );
}


