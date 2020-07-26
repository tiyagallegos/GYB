import React from 'react';
import './RequestListItems.css'

export default props => {
    return (
            <>
            <li className="requests">
                <label>Post By: {props.createdBy}</label> 
                <label>Able Bodied: {props.ableBodied ? "Yes" : "No"}</label>
                <label>Danger Level: {props.dangerLevel} </label>
                <label>Location: {props.location}</label> 
                <label>Details: {props.details} </label> 
                <label>Time: {props.timestamps}</label>            
            </li>
        </>
    );
}