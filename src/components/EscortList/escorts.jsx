import React from 'react';
import './EscortListItem.css'
import EscortList from '../EscortList/EscortList';

export default props => {
    return (
            <>
            <div>
            <EscortList escorts={props.escorts} user={props.user} history={props.history} />
        </div>
        </>
    );
}

