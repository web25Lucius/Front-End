import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';

import './App.css';
import logo from './how-to-logo.png';
import {Jumbotron} from 'reactstrap'

function App(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Jumbotron>
        <Link to="/dashboard">
        <img src={logo} className="App" alt="logo" />
        </Link>
        
         <h1> <br /> Ready to build a better you?</h1>
         </Jumbotron>


         



        <Switch>
          <Route path="/userlogin">
            <LogIn />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/landingpage">
         <LandingPage />
        </Route>
        </Switch>
          
      </header>
    </div>
    </Router>
  );
}

export default App;
