import React from 'react';
import { Link } from 'react-router-dom';
import RequestList from '../../RequestList/RequestList';
import Footer from '../../Footer/Footer';


const MainPage = (props) => {
  return (
    <div>
      <h1>Welcome, Let's get started!</h1>
      <div className="flex-h align-flex-end">
        
        <Link to='/requestForm' > Request a Homie  </Link> 
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link  to='/escortForm'>Be a Homie </Link>
        <RequestList />
        
      </div>
        <Footer />
    </div>
  );

};

export default MainPage;

//<EscortList />