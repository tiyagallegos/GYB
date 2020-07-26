import React, { Component } from 'react';
import RequestListItem from '../RequestListItem/RequestListItem'

export default class RequestList extends Component {
    state = {
        requests: [
            {_id: 1, 
            ableBodied: true, 
            dangerLevel: "Low", 
            location: "Denver", 
            details: "near stop sign outside of Sprouts",
            createdBy: "Tiya",
            timestamps: true  },
            {_id: 2, 
                ableBodied: false, 
                dangerLevel: "High", 
                location: "Denver", 
                details: "downtown",
                createdBy: "jojo",
                timestamps: true  }
        ]

    }
    render () {
      const requests = this.state.requests.map(({_id, ableBodied, dangerLevel, location, details, createdBy, timestamps}) =>
        <RequestListItem key={_id} ableBodied={ableBodied} dangerLevel={dangerLevel} location={location} details={details} createdBy={createdBy} timestamps={timestamps}/>
        );
    return (   
      <ul>
        { requests }
      </ul>
    );
  }
}
  