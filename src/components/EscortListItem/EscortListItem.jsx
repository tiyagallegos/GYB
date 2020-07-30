import React from 'react';
import './EscortListItem.css'

export default props => {
    return (
            <>
            <div>
        <span onClick={() => props.handleEdit(props.id)}>EDIT</span>
        <span
        onClick={() => props.handleRemoveEscort(props.id)}>⛔️</span>
        <span>{props.text}</span>
        <span onClick={() => props.handleEscortDoneUpdate(props.id)}>
            {props.ableBodied ? "✔️" : "❌"}
            {props.selfDefenseTraining ? "✔️" : "❌"}</span>
        </div>
        </>
    );
}

