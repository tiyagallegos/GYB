import React, { Component } from 'react';
import './EscortEditForm.css';
import { Link } from 'react-router-dom';


export default class EscortEditForm extends Component {
    state = this.props.escort
    


handleEdit = (e) => {
    const escortId = this.state._id;
        e.preventDefault();
        this.props.handleEditEscort(escortId, this.state) 
        this.setState({title: "Homie Escort", 
                        ableBodied: true, 
                        vehicle: "", 
                        walking: "",
                        location: "",
                        selfDefenseTraining: false,
                        availability: "", 
                        details: ""             },
          function () {
            this.props.history.push(`/escorts/${escortId}`)
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
        <div className="editform">
        <form className="EditEscortForm" onSubmit={this.handleEdit}><br/><br/><br/><br/>
          <header className="eHeader">Edit Post</header><br/><br/><br/>
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
            <label>Vehicle: </label>
            <input onChange={ this.handleChange } 
            value={this.state.vehicle}
            name="vehicle"
            />
            <label>Walking: </label>
            <input onChange={ this.handleChange } 
            value={this.state.walking}
            name="walking"
             />
            <label>Self Defense Training: </label>
            <input onChange={ this.handleChange } 
            value={this.state.selfDefenseTraining}
            name="selfDefenseTraining"
             />
            <label>Availability: </label>
            <input onChange={ this.handleChange } 
            value={this.state.availability}
            name="availability"
             />
            <label>Details: </label>
            <textarea onChange={ this.handleChange } 
            value={this.state.details}
            name="details"
             />

  
            <button className="editButton">EDIT</button>
            <Link className="editCancel" to="/">Cancel</Link> 
            
            </form>
            </div>
        </>
     );
    }
  }
