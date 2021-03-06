import React, { Component } from 'react';
import requestService from '../utils/requestService';
import { Link } from 'react-router-dom';
import './RequestList.css';

export default class RequestList extends Component {
    state = {};

  handleRequesttDoneUpdate = async id => {
      const requests = await requestService.updateDoneRequest(id);
      this.setState({ requests });
  }
  
  handleRemoveRequest = async id => {
      const requests = await requestService.removeRequest(id);
      this.setState({ requests });
  }

  handleEditRequest = async id => {
      const requestToEdit = await this.state.requests.find(function(request) {
          return request._id === id;
      })
   this.setState({ requestToEdit });
  }

  showRequest = async (id, data) => {
    const requestToShow = await this.state.requests.find(function(request) {
        return request._id === id, data;
    })
    this.setState({requestToShow});
} 


    render () {
      const requests = this.props.requests.map(({_id, dangerLevel, ableBodied, location, details, title, createdAt, timestamps}) =>
          <Link to={`/requests/${_id}`} className="requestList" key={_id} >
            <h3>{title}</h3><br/>
            <h4>Posted: {new Date(createdAt).toLocaleDateString()} at {new Date(createdAt).toLocaleTimeString([], {timeStyle: 'short'})}</h4>
          </Link>
        );
        console.log(requests);
    return (   
          <>
          <div className="rTitle">REQUESTS</div>
          <div className="requestListContainer">{requests}</div>
          </>
      );
    }
  }