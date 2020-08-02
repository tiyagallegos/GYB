import React, { Component } from 'react';
import RequestListItem from '../RequestListItem/RequestListItem';
import './RequestList.css';

export default class RequestList extends Component {
    state = {
        requests: []

    }
    render () {
      const requests = this.state.requests.map(({_id, ableBodied, dangerLevel, location, details, createdBy, timestamps}) =>
        <RequestListItem key={_id} ableBodied={ableBodied} dangerLevel={dangerLevel} location={location} details={details} createdBy={createdBy} timestamps={timestamps}/>
        );
    return (   
      <ul>
        <div className="container">{ requests }</div>
      </ul>
    );
  }
}
  