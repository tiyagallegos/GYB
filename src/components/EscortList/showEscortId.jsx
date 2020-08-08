import React from 'react';
import './EscortList';
import { Link } from 'react-router-dom';
import './showEscortId.css';

export default props => {
    return (
            <div classname="eIdContainer">
            <div className="escortId">
            <h1>Title: {props.escort.title}</h1><br/>
            <p>Created By: {props.user.name}</p><br/>
            <p> Able Bodied: {props.escort.ableBodied}</p><br/>
            <p> Vehicle: {props.escort.vehicle}</p><br/>
            <p> Walking: {props.escort.walking}</p><br/>
            <p> Location: {props.escort.location}</p><br/>
            <p> Self Defense Training: {props.escort.selfDefenseTraining}</p><br/>
            <p> Availability: {props.escort.availability}</p><br/>
            <p>  Details: {props.escort.details}</p><br/>
            <p>Created At: {new Date(props.escort.createdAt).toLocaleDateString()} at {new Date(props.escort.createdAt).toLocaleTimeString([], {timeStyle: 'short'})}</p><br/>       
        <Link className="editLink" to={`/escorts/${props.escort._id}/edit`} onClick={() => props.handleEdit(props.id)}>✏️</Link><br/>
        <span className="deleteEscortButton" onClick={() => props.handleRemoveEscort(props.escort._id)}>⛔️</span><br/>
        <Link className="backLink" to="/">Back</Link></div>
        </div>
    );
}


