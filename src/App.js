import React from 'react';
import './App.css';
import RequestList from './components/RequestList/RequestList';



const RequestForm = () => {
  return (
    <form>
      <label>Able Bodied Y/N: </label>
      <input placeholder="Y"/>
      <label>Danger Level: </label>
      <input placeholder="High"/>
      <label>Location: </label>
      <input placeholder="Denver"/>
      <label>Details: </label>
      <input placeholder="waiting by stop sign outside Sprouts"/>
      <button>Submit</button><button>Cancel</button>
    </form>
  ); 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React GYB
      </header>
      <h1>Welcome, Let's get started!</h1>
      <RequestList/>
      <RequestForm/>
    </div>
  );
}

export default App;
