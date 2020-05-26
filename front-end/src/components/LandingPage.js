import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import Registration from './Registration';

import '../App.css';
import PostCard from './PostCard';

function LandingPage(props){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <PostCard  title={props.title} username={props.username} img={props.img} posttext={props.posttext} likes={props.likes} id={props.id}/>
    
         
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
        </Switch>
          
      </header>
    </div>
    </Router>
  );
}

export default LandingPage;
