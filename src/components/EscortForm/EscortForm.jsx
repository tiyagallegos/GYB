import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EscortForm extends Component {
    state = {
            title: "", 
            ableBodied: true, 
            vehicle: "", 
            walking: "",
            location: "",
            selfDefenseTraining: false,
            availability: "", 
            details: ""
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value, 
        });
    }
//only edit prop that being changed [e.target.name] computer prop names resulved to specific piece of state being edited ie. typing vehicle will only update vehile

    handleSubmit = e => {
        e.preventDefault();
        //prevent pg refresh
        this.props.handleAddEscort({title: this.state.title, ablebodied: this.state.ableBodied, vehicle: this.state.vehicle, walking: this.state.walking,
                                    location: this.state.location, selfDefenseTraining: this.state.selfDefenseTraining, availability: this.state.availability,
                                    details: this.state.details});
        //pass new created todo tex to the add todo method
        this.setState({title: "I'm a Homie", 
                        ableBodied: true, 
                        vehicle: "", 
                        walking: "",
                        location: "",
                        selfDefenseTraining: false,
                        availability: "", 
                        details: ""});
        //clear our todo form
    }
    handleEditEscort = (id, data) => {
        this.props.handleEditEscort(id, data) 
        this.setState({title: "I'm a Homie", 
                        ableBodied: true, 
                        vehicle: "", 
                        walking: "",
                        location: "",
                        selfDefenseTraining: false,
                        availability: "", 
                        details: ""             })
    }


    render() {
    return(
      <div>
          {this.props.todoEdit ?
          <>
          
            <input onChange={ this.handleChange } 
            value={this.state.title}
            name="title"
            placeholder={this.props.escortToEdit.title} />
            
            <input onChange={ this.handleChange } 
            value={this.state.ableBodied}
            name="ableBodied"
            placeholder={this.props.escortToEdit.ableBodied} />

            <input onChange={ this.handleChange } 
            value={this.state.vehicle}
            name="vehicle"
            placeholder={this.props.escortToEdit.vehicle} />

            <input onChange={ this.handleChange } 
            value={this.state.walking}
            name="walking"
            placeholder={this.props.escortToEdit.walking} />

            <input onChange={ this.handleChange } 
            value={this.state.selfDefenseTraining}
            name="selfDefenseTraining"
            placeholder={this.props.escortToEdit.selfDefenseTraining} />

            <input onChange={ this.handleChange } 
            value={this.state.availability}
            name="availability"
            placeholder={this.props.escortToEdit.availability} />

            <input onChange={ this.handleChange } 
            value={this.state.details}
            name="details"
            placeholder={this.props.escortToEdit.details} />

            
            <button onClick={() => this.handleEditEscort()}>EDIT</button>
          </>
          :
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.title} />
            <label>Able Bodied:</label>
            <input onChange={this.handleChange} value={this.state.ableBodied} />
            <label>Vehicle:</label>
            <input onChange={this.handleChange} value={this.state.vehicle} />
            <label>Walking:</label>
            <input onChange={this.handleChange} value={this.state.walking} />
            <label>Location:</label>
            <input onChange={this.handleChange} value={this.state.location} />
            <label>Self Defense Training: </label>
            <input onChange={this.handleChange} value={this.state.selfDefenseTraining} />
            <label>Availability: </label>
            <input onChange={this.handleChange} value={this.state.availability} />
            <label>Details: </label>
            <textarea onChange={this.handleChange} value={this.state.details} /> <br/><br/>
          <button>Submit</button><Link to="/">Cancel</Link>
          </form>  
    }
      </div>
    );
  }
}

//text area doesn't have value property??
//cannot write in spaces
            
//service module import funciton into file call it directly from the funciton edit escort call it inside funciton on line 45