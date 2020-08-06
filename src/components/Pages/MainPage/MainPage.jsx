import React from 'react';
import RequestList from '../../RequestList/RequestList';
import EscortList from '../../EscortList/EscortList';
import './MainPage.css'



const MainPage = (props) => {
  return (
    <>
  
      <div className="mainPage">
        <RequestList requests={props.requests} user={props.user} history={props.history} handleRequestEdit={props.handleRequestEdit} handleEditRequest={props.handleEditRequest} />
        <EscortList escorts={props.escorts} user={props.user} history={props.history} handleEditEscort={props.handleEditEscort} />
      </div>
    </>
  );
};

export default MainPage;

//<EscortList />