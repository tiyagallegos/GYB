import React, { Component } from 'react';
import EscortListItem from '../EscortListItem/EscortListItem';
import EscortForm from '../EscortForm/EscortForm';
import escortService from '../utils/escortService';


export default class RequestList extends Component {
    state = {
        escorts: [],
        escortToEdit: null
    }

    handleAddEscort = async escort => {
       const escorts = await escortService.createEscort({title: "", ableBodied: true, vehicle: "", walking: "", location: "", selfDefenseTraining: false,availability: "", details: ""})
       console.log(escorts)
       this.setState({ escorts });
      }
      
      handleEscortDoneUpdate = async id => {
          const escorts = await escortService.updateDoneEscort(id);
          this.setState({ escorts });
      }
      
      handleRemoveEscort = async id => {
          const escorts = await escortService.removeEscort(id);
          this.setState({ escorts });
      }
  
      handleEditEscort = async (id, data) => {
          const escorts = await escortService.updateTodo(id, {title: "", ableBodied: true, vehicle: "", walking: "", location: "", selfDefenseTraining: false,availability: "", details: ""});
          console.log(escorts)
          this.setState({ escorts, escortToEdit: null });
      }
  
      handleEdit = async id => {
          const escortToEdit = this.state.escorts.find(function(escort) {
              return escort._id === id;
          })
       this.setState({ escortToEdit });
      }
  
      //lifecycle method--gets auto called by react durign a specific phase
      async componentDidMount() {
          const escorts = await escortService.getEscorts()
          this.setState({escorts});
      }
      


    render () {
      const escorts = this.state.escorts.map(({_id, ableBodied, vehicle, walking, location, selfDefenseTraining, 
                            availability, details, title, createdBy, timestamps}) =>
        <EscortForm
        key={_id} 
        title={title} 
        ableBodied={ableBodied} 
        vehicle={vehicle} 
        walking={walking} 
        location={location} 
        selfDefenseTraining={selfDefenseTraining} 
        availability={availability}
        details={details} 
        createdBy={createdBy} 
        timestamps={timestamps}
        handleAddEscort={this.handleAddEscort}
        escortToEdit={this.escortToEdit}
        handleEditEscort={this.handleEditEscort} 
        handleRemoveEscort={this.handleRemoveEscort}
        handleEscortDoneUpdate={this.handleEscortDoneUpdate}
        handleEdit={this.handleEdit}/>
        );
    return (   
      <>
        <div className="container">{ escorts }</div>
        <EscortListItem  />
      </>
    );
  }
}
  