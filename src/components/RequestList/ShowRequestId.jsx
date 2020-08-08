import React from 'react';
import './RequestList';
import { Link } from 'react-router-dom';
import './ShowRequestId.css';

export default props => {
    return (
            <div classname="rIdContainer">
            <div className="requestId">
            <h1>Title: {props.request.title}</h1><br/>
            <p>Created By: {props.user.name}</p><br/>
            <p> Able Bodied: {props.request.ableBodied}</p><br/>
            <p> Danger Level: {props.request.dangerLevel} </p><br/>
            <p> Location: {props.request.location}</p><br/>
            <p>Details: {props.request.details}</p><br/>
            <p>Created At: {props.request.createdAt.toLocaleString()}</p><br/>
        <Link className="reditLink" to={`/requests/${props.request._id}/edit`} onClick={() => props.handleREdit(props.id)}>✏️</Link><br/>
        <span className="rdeleteRequestButton" onClick={() => props.handleRemoveRequest(props.request._id)}>⛔️</span><br/>
        <Link className="rbackLink" to="/">Back</Link></div>
        </div>
    );
}


