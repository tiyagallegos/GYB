import React, { Component } from 'react';
import './RequestEditForm.css';
import { Link } from 'react-router-dom';

export default class RequestEditForm extends Component {
    state = this.props.request
    
handleEdit = (e) => {
    const requestId = this.state._id;
        e.preventDefault();
        this.props.handleRequestEdit(requestId, this.state) 
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
          <header className="reditHeader">Edit Request</header><br/><br/><br/>
            <label>Title: </label>
            <input onChange={ this.handleChange } 
            value={this.state.title}
            name="title"
            /><br/>
            <label>Able Bodied: </label>
            <input onChange={ this.handleChange } 
            value={this.state.ableBodied}
            name="ableBodied"
             /><br/>
            <label>Danger Level: </label>
            <input onChange={ this.handleChange } 
            value={this.state.dangerLevel}
            name="dangerLevel"
            /><br/>
            <label>Availability: </label>
            <input onChange={ this.handleChange } 
            value={this.state.availability}
            name="availability"
             /><br/>
             <label>Location: </label>
            <input onChange={ this.handleChange } 
            value={this.state.location}
            name="location"
             /><br/>
            <label>Details: </label>
            <textarea onChange={ this.handleChange } 
            value={this.state.details}
            name="details"
             /><br/>
            <button className="reditButton">EDIT</button><br/>
            <Link className="reditCancel" to="/">Cancel</Link> 
            </form>
            </div>
        </>
     );
    }
  }
