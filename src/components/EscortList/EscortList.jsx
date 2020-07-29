import React, { Component } from 'react';
import EscortListItem from '../EscortListItem/EscortListItem';


export default class RequestList extends Component {
    state = {
        escorts: [
            {
            title: "I'm a Homie",
            _id: 1, 
            ableBodied: true, 
            vehicle: "yes", 
            walking: "No",
            location: "Denver",
            selfDefenseTraining: false,
            availability: "4-6pm", 
            details: "red ford pick up truck p/u for Jojo",
            createdBy: "Tiya",
            timestamps: true  },
            {
            title: "I'm a Homie",
            _id: 2, 
            ableBodied: true, 
            vehicle: "No", 
            walking: "Yes",
            location: "Denver",
            selfDefenseTraining: true,
            availability: "9-5", 
            details: "On my way to accompany Tiya safely home",
            createdBy: "Tiya",
            timestamps: true  }
        ]

    }
    render () {
      const escorts = this.state.escorts.map(({_id, ableBodied, vehicle, walking, location, selfDefenseTraining, 
                            availability, details, title, createdBy, timestamps}) =>
        <EscortListItem key={_id} title={title} ableBodied={ableBodied} vehicle={vehicle} walking={walking} location={location} 
                        selfDefenseTraining={selfDefenseTraining} availability={availability}
                        details={details} createdBy={createdBy} timestamps={timestamps}/>
        );
    return (   
      <ul>
        <div className="container">{ escorts }</div>
      </ul>
    );
  }
}
  