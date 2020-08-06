import React from 'react';
import './RequestList';
import { Link } from 'react-router-dom';
import './ShowRequestId.css';

export default props => {
    return (
            <div classname="rIdContainer">
            <div className="requestId">
            <h1>Title:{props.request.title}</h1>
            <p>Created By:{props.request.createdBy}</p> 
            <p> Able Bodied: {props.request.ableBodied}</p>
            <p> Danger Level:{props.request.dangerLevel} </p>
            <p> Location: {props.request.location} </p>
            <p>Details: {props.request.details} </p>
            <p>Created At:{props.request.createdAt.toLocaleString()}</p>
            
        
       
        <Link className="reditLink" to={`/requests/${props.request._id}/edit`} onClick={() => props.handleEditRequest(props.id)}>✏️</Link>

        <span className="rdeleteRequestButton" onClick={() => props.handleRemoveRequest(props.request._id)}>⛔️</span>
        
        <Link className="rbackLink" to="/">Back</Link></div>
        </div>
    );
}


