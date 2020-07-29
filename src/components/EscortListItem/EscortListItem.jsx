import React from 'react';
import './EscortListItem.css'

export default props => {
    return (
            <>
            <li className="requests">
                <label>Hello! {props.title}</label> 
                <label>Name: {props.createdBy}</label> 
                <label>Able Bodied: {props.ableBodied ? "Yes" : "No"}</label>
                <label>Using a Vehicle: {props.vehicle} </label>
                <label>Walking: {props.walking}</label> 
                <label>Location: {props.location}</label> 
                <label>Self Defense Training: {props.selfDefenseTraining}</label> 
                <label>availability: {props.availability}</label> 
                <label>Details: {props.details} </label> 
                <label>Time: {props.timestamps}</label>            
            </li>
        </>
    );
}

