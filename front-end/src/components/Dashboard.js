import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import Registration from './Registration';
import LogIn from './LogIn';


import '../App.css';

function Dashboard (){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      
  
        <Button outline color="primary"><Link to="/userlogin">Log in</Link></Button>
        <Button outline color="info"><Link to="/registration">Sign Up</Link></Button>
        
        <Switch>
          <Route path="/userlogin">
            <LogIn />
          </Route>
          <Route  path="/registration">
            <Registration />
          </Route>
        </Switch>
          
      </header>
    </div>
    </Router>
  );
}

export default Dashboard;
