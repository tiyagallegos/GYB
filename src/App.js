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


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      escorts: [],
      escortToEdit: null
    };
  }


handleAddEscort = async escort => {
    const escorts = await escortService.createEscort(escort)
    console.log(escorts)
    this.setState({ escorts });
   }

   handleEditEscort = async (id, data) => {
    const escorts = await escortService.updateEscort(id, data.escort);
    console.log(escorts)
    this.setState({ escorts, escortToEdit: null });
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
    <>
    <div className="App">
      <header className="App-header">
        React GYB <NavBar user={this.state.user} handleLogout={this.handleLogout} />
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
                userService.getUser() ? 
                <RequestForm />
                :
                <Redirect to='login' />
            }/>
            <Route exact path='/escortForm' render={() => 
                userService.getUser() ? 
                <EscortForm 
                handleAddEscort={this.handleAddEscort}
                escortToEdit={this.escortToEdit}
                handleEditEscort={this.handleEditEscort} 
                />
                :
                <Redirect to='login' />
            }/>
      </Switch>
    </div>
    </>
    );
  }
}

export default App;

