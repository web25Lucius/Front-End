import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import './App.css';
import logo from './logo.svg';

function App(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1 className="display-3">Welcome to How-To:</h1>
        <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
        </Link>
         <h2 className="lead">Ready to build a better you?</h2>



        <Switch>
          <Route path="/userlogin">
            <LogIn />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route exact path="/">
            <Dashboard/>
          </Route>
        </Switch>
          
      </header>
    </div>
    </Router>
  );
}

export default App;
