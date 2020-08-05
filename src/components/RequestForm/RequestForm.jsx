import React from 'react';
import { Link } from 'react-router-dom';
import './RequestForm.css'
import Footer from '../Footer/Footer';

const RequestForm = () => {
    return (
      <>
      <div className="rform">
      <form className="requestForm">
        <header className="rHeader">Request a Homie</header> <br/>
        <label>Able Bodied Y/N: </label>
        <input placeholder="Y"/>
        <label>Danger Level: </label>
        <input placeholder="High"/>
        <label>Location: </label>
        <input placeholder="Denver"/>
        <label>Details: </label>
        <input placeholder="waiting by stop sign outside Sprouts"/><br/>
        <button className="rbutton">Submit</button> <br/><Link className="rcancel" to="/">Cancel</Link>
      </form>
      </div>
      </>
    ); 
  }

  export default RequestForm;