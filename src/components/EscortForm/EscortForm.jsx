import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import escortService from '../utils/escortService';
import './EscortForm.css';
import userService from '../utils/userService';
import Footer from '../Footer/Footer';


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
            [e.target.name]: e.target.value 
        });
    }
//only edit prop that being changed [e.target.name] computer prop names resulved to specific piece of state being edited ie. typing vehicle will only update vehile

    handleSubmit = e => {
      console.log(e)
        e.preventDefault();
        const userId = userService.getUser()._id
        console.log(userId) 
        this.props.handleAddEscort(this.state, userId);
        //pass new created escort tex to the add escort method
        this.setState({title: "Homie Escort", 
                        ableBodied: true, 
                        vehicle: "", 
                        walking: "",
                        location: "",
                        selfDefenseTraining: false,
                        availability: "", 
                        details: ""}, () => {
                        this.props.history.push("/")
                        });
                      
        //clear our todo form
    }
    handleEdit = (id, data) => {
        this.props.handleEditEscort(id, data) 
        this.setState({title: "Homie Escort", 
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
          {this.props.escortToEdit ?
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
          <div className="eform">
          <form className="escortForm " onSubmit={this.handleSubmit}><br/><br/><br/><br/>
          <header className="eHeader">Be A Homie</header><br/><br/><br/>
            <label>Title:</label>
            <input onChange={this.handleChange} name="title" value={this.state.title} /> <br/>
            <label>Able Bodied:</label>
            <input onChange={this.handleChange} name="ableBodied" value={this.state.ableBodied} /><br/>
            <label>Vehicle:</label>
            <input onChange={this.handleChange} name="vehicle" value={this.state.vehicle} /><br/>
            <label>Walking:</label>
            <input onChange={this.handleChange} name="walking" value={this.state.walking} /><br/>
            <label>Location:</label>
            <input onChange={this.handleChange} name="location" value={this.state.location} /><br/>
            <label>Self Defense Training: </label>
            <input onChange={this.handleChange} name="selfDefenseTraining" value={this.state.selfDefenseTraining} /><br/>
            <label>Availability: </label>
            <input onChange={this.handleChange} name="availability" value={this.state.availability} /><br/>
            <label>Details: </label>
            <textarea onChange={this.handleChange} name="details" value={this.state.details} /> <br/><br/>
            <button className="button is-primary">Submit</button><br/><br/>
            <Link className="ecancel" to="/">Cancel</Link>  
          </form>  
          
          </div>
    }
      </div>
    );
  }
}

//text area doesn't have value property??
//cannot write in spaces
            
//service module import funciton into file call it directly from the funciton edit escort call it inside funciton on line 45