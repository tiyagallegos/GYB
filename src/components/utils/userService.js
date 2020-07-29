import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    console.log(res)
    if (res.ok) {
      return res.json();}
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({token}) => tokenService.setToken(token));
  //object destructuring --> .then(token => token.token)
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST', 
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  }).then(res => {
    //if we get a status of 2xx (aka res.ok
    if (res.ok) return res.json();
    throw new Error('Bad Credentials');
  }).then(({token}) => tokenService.setToken(token));
}
//verifying theres a user currently signed in
export default {
  signup,
  getUser,
  logout,
  login
};