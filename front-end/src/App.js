import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import './App.css';
import logo from './how-to-logo.png';
import {Jumbotron} from 'reactstrap'

function App(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Jumbotron>
        <Link to="/">
        <img src={logo} className="App" alt="logo" />
        </Link>
        
         <h1 >Ready to build a better you?</h1>
         </Jumbotron>
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
