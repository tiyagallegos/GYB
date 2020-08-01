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
import EscortListId from './components/EscortList/showEscortId';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      escorts: [],
      escortToEdit: null
    };
  }


handleAddEscort = async (escort, id) => {
    const escorts = await escortService.createEscort(escort, id)
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

async componentDidMount() {
  const escorts = await escortService.getEscorts()
  this.setState({escorts});
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
              user={this.state.user}
              escorts={this.state.escorts} />
            }/>
            <Route exact path='/escorts/:id' render={(props) =>
            <EscortListId 
            {...props}
            escort={this.state.escorts.find(escort => escort._id === props.match.params.id)}/>
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
                <RequestForm {...props}/>
                :
                <Redirect to='login' />
            }/>
            <Route exact path='/escortForm' render={(props) => 
                userService.getUser() ? 
                <EscortForm {...props}
                handleAddEscort={this.handleAddEscort}
                escortToEdit={this.escortToEdit}
                handleEditEscort={this.handleEditEscort} 
                escorts={this.state.escorts} 
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

