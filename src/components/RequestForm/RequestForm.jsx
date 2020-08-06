import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RequestForm.css';
import userService from '../utils/userService';

export default class RequestForm extends Component {
  state = {
          title: "", 
          ableBodied: true, 
          dangerLevel: "", 
          location: "",
          details: "",
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value 
    });
}

handleSubmitRequest = e => {
    e.preventDefault();
    const userId = userService.getUser()._id
    this.props.handleAddRequest(this.state, userId);
    this.setState({title: "Requesting A Homie", 
                  ableBodied: true, 
                  dangerLevel: "", 
                  location: "",
                  details: ""}, 
                  () => {this.props.history.push("/") 
    });
}

  render() {
    return (
      <div>
      {this.props.requestToEdit ?
      <>
      <input onChange={ this.handleChange } 
      value={this.state.title}
      name="title"
      placeholder={this.props.requestToEdit.title} />

      <input onChange={ this.handleChange } 
      value={this.state.ableBodied}
      name="ableBodied"
      placeholder={this.props.requestToEdit.ableBodied} />
      
      <input onChange={ this.handleChange } 
      value={this.state.dangerLevel}
      name="dangerLevel"
      placeholder={this.props.requestToEdit.dangerLevel} />

      <input onChange={ this.handleChange } 
      value={this.state.location}
      name="location"
      placeholder={this.props.requestToEdit.location} />

      <input onChange={ this.handleChange } 
      value={this.state.details}
      name="details"
      placeholder={this.props.requestToEdit.details} />

      <button onClick={() => this.handleEditRequest()}>EDIT</button>
      </>
      :
      <div className="rform">
      <form className="requestForm"onSubmit={this.handleSubmitRequest}><br/><br/><br/><br/>
        <header className="rHeader">Request a Homie</header><br/><br/><br/>
        <label>Title:</label>
        <input onChange={this.handleChange} name="title" value={this.state.title} /><br/>
        <label>Able Bodied:</label>
        <input onChange={this.handleChange} name="ableBodied" value={this.state.ableBodied} /><br/>
        <label>Danger Level:</label>
        <input onChange={this.handleChange} name="dangerLevel" value={this.state.dangerLevel} /><br/>
        <label>Location:</label>
        <input onChange={this.handleChange} name="location" value={this.state.location} /><br/>
        <label>Details: </label>
        <textarea onChange={this.handleChange} name="details" value={this.state.details} /><br/><br/>
        <button className="rbutton">Submit</button> <br/><Link className="rcancel" to="/">Cancel</Link>
        </form>  
        </div>
    }
      </div>
    );
  }
}

 
    
    