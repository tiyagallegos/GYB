import React, { Component } from 'react';
import './RequestEditForm.css';
import { Link } from 'react-router-dom';

export default class RequestEditForm extends Component {
    state = this.props.request
    
handleEdit = (e) => {
    const requestId = this.state._id;
        e.preventDefault();
        this.props.handleEditRequest(requestId, this.state) 
        this.setState({ title: "", 
                        ableBodied: true, 
                        location: "",
                        details: ""             },
          function () {
            this.props.history.push(`/requests/${requestId}`)
          });
      }

    handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value 
      });
  }

render(){
    return (
        <>
        <div className="reditform">
        <form className="rEditEscortForm" onSubmit={this.handleEdit}><br/><br/><br/><br/>
          <header className="reHeader">Edit Request</header><br/><br/><br/>
            <label>Title: </label>
            <input onChange={ this.handleChange } 
            value={this.state.title}
            name="title"
            />
            <label>Able Bodied: </label>
            <input onChange={ this.handleChange } 
            value={this.state.ableBodied}
            name="ableBodied"
             />
            <label>Danger Level: </label>
            <input onChange={ this.handleChange } 
            value={this.state.dangerLevel}
            name="dangerLevel"
            />
            <label>Availability: </label>
            <input onChange={ this.handleChange } 
            value={this.state.availability}
            name="availability"
             />
             <label>Location: </label>
            <input onChange={ this.handleChange } 
            value={this.state.location}
            name="location"
             />
            <label>Details: </label>
            <textarea onChange={ this.handleChange } 
            value={this.state.details}
            name="details"
             />
            <button className="reditButton">EDIT</button>
            <Link className="reditCancel" to="/">Cancel</Link> 
            </form>
            </div>
        </>
     );
    }
  }
