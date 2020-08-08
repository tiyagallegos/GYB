import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../src/components/utils/userService';
import escortService from '../src/components/utils/escortService';
import MainPage from '../src/components/Pages/MainPage/MainPage';
import SignupPage from '../src/components/Pages/SignupPage/SignupPage';
import LoginPage from '../src/components/Pages/LoginPage/LoginPage';
import RequestForm from './components/RequestForm/RequestForm';
import EscortForm from '../src/components/EscortForm/EscortForm';
import NavBar from './components/NavBar/NavBar';
import Footer from '../src/components/Footer/Footer';
import EscortList from '../src/components/EscortList/EscortList';
import EscortEditForm from '../src/components/EscortEditForm/EscortEditForm';
import ShowEscortId from './components/EscortList/showEscortId';
import requestService from '../src/components/utils/requestService';
import RequestEditForm from '../src/components/RequestEditForm/RequestEditForm';
import RequestList from '../src/components/RequestList/RequestList';
import ShowRequestId from '../src/components/RequestList/ShowRequestId';
import AboutUs from '../src/components/InfoPages/AboutUs';
import Donate from '../src/components/InfoPages/Donate';
import Resources from '../src/components/InfoPages/Resources';
import AllEscorts from './components/EscortList/AllEscorts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      escorts: [],
      escortToEdit: null,
      requests: [],
      requestToEdit: null
    };
  }

handleRemoveEscort = async id => {
    const escorts = await escortService.removeEscort(id);
    this.props.history.push('/')
    this.setState({ escorts });
  } 

handleRemoveRequest = async id => {
    const requests = await requestService.removeRequest(id);
    this.props.history.push('/')
    this.setState({ requests });
  } 

handleAddEscort = async (escort, id) => {
    const escorts = await escortService.createEscort(escort, id)
    console.log(escorts)
    this.setState({ escorts });
  }

  handleAddRequest = async (request, id) => {
    const requests = await requestService.createRequest(request, id)
    console.log(requests)
    this.setState({ requests });
  }

handleEditEscort = async (id, data) => {
    const escorts = await escortService.updateEscort(id, data);
    console.log(escorts)
    this.setState({ escorts, escortToEdit: null });
}

handleRequestEdit = async (id, data) => {
  const requests = await requestService.updateRequest(id, data);
  console.log(requests)
  this.setState({ requests, requestToEdit: null });
}
handleEdit = async id => {
  const escortToEdit = await this.state.escorts.find(function(escort) {
      return escort._id === id;
  })
this.setState({ escortToEdit });
}

handleREdit = async id => {
  const requestToEdit = await this.state.requests.find(function(request) {
      return request._id === id;
  })
this.setState({ requestToEdit });
}

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

handleSignupOrLogin = () => {
  this.setState({ user: userService.getUser() });
}

async componentDidMount() {
  const escorts = await escortService.getEscorts()
  const requests = await requestService.getRequests()
  this.setState({escorts, requests});
}

render() {
  return (
    <>
    <div className="App">
    <NavBar user={this.state.user} handleLogout={this.handleLogout} />
      
      
      <Switch>
          <Route exact path='/' render={(props) =>
            <MainPage 
            {...props}
              handleLogout={this.handleLogout}
              requests={this.state.requests}
              user={this.state.user}
              escorts={this.state.escorts} />
            }/>
            <Route exact path='/requests/:id/edit' render={(props) =>
            <RequestEditForm  
            {...props}
            user={this.state.user}
            requestToEdit={this.state.requestToEdit}
            handleRequestEdit={this.handleRequestEdit}
            handleREdit={this.handleREdit}
            requests={this.state.requests} 
            request={this.state.requests.find(request => request._id === props.match.params.id)}/>
            }/>
            <Route exact path='/escorts/:id/edit' render={(props) =>
            <EscortEditForm  
            {...props}
            user={this.state.user}
            escortToEdit={this.state.escortToEdit}
            handleEdit={this.handleEdit}
            handleEditEscort={this.handleEditEscort}
            escorts={this.state.escorts} 
            escort={this.state.escorts.find(escort => escort._id === props.match.params.id)}/>
            }/>
            <Route exact path='/escorts/:id' render={(props) =>
            <ShowEscortId
            {...props}
            user={this.state.user}
            escortToEdit={this.state.escortToEdit}
            handleRemoveEscort={this.handleRemoveEscort}
            handleEdit={this.handleEdit}
            escorts={this.state.escorts} 
            handleEditEscort={this.handleEditEscort}
            escort={this.state.escorts.find(escort => escort._id === props.match.params.id)}/>
            }/>
            <Route exact path='/requests/:id' render={(props) =>
            <ShowRequestId
            {...props}
            user={this.state.user}
            requestToEdit={this.state.requestToEdit}
            handleRemoveRequest={this.handleRemoveRequest}
            handleRequestEdit={this.handleRequestEdit}
            requests={this.state.requests} 
            handleREdit={this.handleREdit}
            request={this.state.requests.find(request => request._id === props.match.params.id)}/>
            }/>
            <Route exact path='/escorts' render={(props) => 
            <EscortList {...props}
            escorts={this.state.escorts}
            />
            }/>
            <Route exact path='/requests' render={(props) => 
            <RequestList {...props}
            requests={this.state.requests}
            />
            }/>
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}/>
            }/>
            <Route exact path='/login' render={({history}) => 
            <LoginPage  
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}/>
            }/>
            <Route exact path='/requestForm' render={(props) => 
                userService.getUser() ? 
                <RequestForm 
                {...props}
                user={this.state.user}
                handleAddRequest={this.handleAddRequest}
                requestToEdit={this.requestToEdit}
                handleEditRequest={this.handleEditRequest} 
                requests={this.state.requests} 
                />
                :
                <Redirect to='login' />
            }/>
            <Route exact path='/escortForm' render={(props) => 
                userService.getUser() ? 
                <EscortForm {...props}
                user={this.state.user}
                handleAddEscort={this.handleAddEscort}
                escortToEdit={this.escortToEdit}
                handleEditEscort={this.handleEditEscort} 
                escorts={this.state.escorts} 
                />
                :
                <Redirect to='login' />
            }/>
            <Route exact path='/aboutus' render={(props) => 
            <AboutUs {...props} />
            }/>
            <Route exact path='/donations' render={(props) => 
            <Donate {...props} />
            }/>
            <Route exact path='/resources' render={(props) => 
            <Resources {...props} />
            }/>
      </Switch>
    </div>
      <Footer />
    </>
    );
  }
}

export default App;

