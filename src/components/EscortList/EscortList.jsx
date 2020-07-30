import React, { Component } from 'react';
import EscortListItem from '../EscortListItem/EscortListItem';
import EscortForm from '../EscortForm/EscortForm';
import escortService from '../utils/escortService';


export default class RequestList extends Component {
    state = {
        escorts: [],
        escortToEdit: null
    };

    
      
      handleEscortDoneUpdate = async id => {
          const escorts = await escortService.updateDoneEscort(id);
          this.setState({ escorts });
      }
      
      handleRemoveEscort = async id => {
          const escorts = await escortService.removeEscort(id);
          this.setState({ escorts });
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
        />
        );
    return (   
      <>
        <div className="container">{ escorts }</div>
        <EscortListItem  
        handleRemoveEscort={this.handleRemoveEscort}
        handleEscortDoneUpdate={this.handleEscortDoneUpdate}
        handleEdit={this.handleEdit}
        />
      </>
    );
  }
}
  