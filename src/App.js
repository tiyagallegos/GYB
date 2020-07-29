import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../src/components/utils/userService';
import MainPage from '../src/components/Pages/MainPage/MainPage';
import SignupPage from '../src/components/Pages/SignupPage/SignupPage';
import LoginPage from '../src/components/Pages/LoginPage/LoginPage';
import RequestForm from './components/RequestForm/RequestForm';
import EscortForm from './components/EscortForm/EscortForm';
import NavBar from './components/NavBar/NavBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }



handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

handleSignupOrLogin = () => {
  this.setState({ user: userService.getUser() });
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        React GYB <NavBar user={this.props.user} handleLogout={this.props.handleLogout} />
      </header>
      
      <Switch>
          <Route exact path='/' render={() =>
            <MainPage 
              handleLogout={this.handleLogout}
              user={this.state.user} />
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
            <Route exact path='/requestForm' render={() =>
            <RequestForm />
            }/>
            <Route exact path='/escortForm' render={() =>
            <EscortForm />
            }/>
      </Switch>
    </div>
    );
  }
}
export default App;

/*   request form limited access
 <Route exact path='/requestForm' render={() => 
                userService.getUser() ? 
                <RequestForm />
                :
                <Redirect to='login' />
            }/>

        ESCORT FORM LIMIT TO USER ACCESS
        <Route exact path='/escortForm' render={() => 
                userService.getUser() ? 
                <EscortForm />
                :
                <Redirect to='login' />
            }/>

*/