import React from 'react';
import { Link } from 'react-router-dom';

const RequestForm = () => {
    return (
      <form>
        <header>Request a Homie</header>
        <label>Able Bodied Y/N: </label>
        <input placeholder="Y"/>
        <label>Danger Level: </label>
        <input placeholder="High"/>
        <label>Location: </label>
        <input placeholder="Denver"/>
        <label>Details: </label>
        <input placeholder="waiting by stop sign outside Sprouts"/><br/>
        <button>Submit</button> <Link to="/">Cancel</Link>
      </form>
    ); 
  }

  export default RequestForm;