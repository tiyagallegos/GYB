import React from 'react';
import { Link } from 'react-router-dom';
import RequestList from '../../RequestList/RequestList';
import Footer from '../../Footer/Footer';
import RequestForm from '../../RequestForm/RequestForm';
import EscortForm from '../../EscortForm/EscortForm';
import EscortList from '../../EscortList/EscortList';
import EscortListId from '../../EscortList/showEscortId';
import './MainPage.css'



const MainPage = (props) => {
  return (
    <>
  
      <div className="mainPage">
        <RequestList escorts={props.escorts} />
        
        <EscortList escorts={props.escorts} user={props.user} history={props.history} handleEditEscort={props.handleEditEscort} />
      </div>
    </>
  );
};

export default MainPage;

//<EscortList />