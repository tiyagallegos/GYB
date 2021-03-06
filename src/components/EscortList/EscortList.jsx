import React, { Component } from 'react';
import escortService from '../utils/escortService';
import './Escortlist.css';
import { Link } from 'react-router-dom';



export default class EscortList extends Component {
    state = { };


      handleEscortDoneUpdate = async id => {
          const escorts = await escortService.updateDoneEscort(id);
          this.setState({ escorts });
      }
      
      handleRemoveEscort = async id => {
          const escorts = await escortService.removeEscort(id);
          this.setState({ escorts });
      }
  
      
  
      handleEdit = async id => {
          const escortToEdit = await this.state.escorts.find(function(escort) {
              return escort._id === id;
          })
       this.setState({ escortToEdit });
      }

      showEscort = async (id, data) => {
        const escortToShow = await this.state.escorts.find(function(escort) {
            return escort._id === id, data;
        })
        this.setState({escortToShow});
    } 
  

    render () {
    
      const escorts = this.props.escorts.map(({_id, ableBodied, vehicle, walking, location, selfDefenseTraining, 
                            availability, details, title, createdAt, timestamps}) =>
        <Link to={`/escorts/${_id}`} className="escortList" key={_id} >
        <h3>{title}</h3><br/>
            <h4>Posted: {new Date(createdAt).toLocaleDateString()} at {new Date(createdAt).toLocaleTimeString([], {timeStyle: 'short'})}</h4>   
        </Link>
        );
    return (   
      <>
        <div className="eTitle">HOMIES</div>
        <div className="container">{escorts}</div>
      </>
    );
  }
}
  