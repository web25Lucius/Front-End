import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';
import cook from './components/img/cook.jpg'
import './App.css';
import logo from './how-to-logo.png';
import {Jumbotron , Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap'

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
         <div>
          <Card inverse>
            <CardImg width="100%" src={cook} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>CanadianCoins</CardTitle>
              <CardText>This is what I made my partner for our anniversary.  I never cook. </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
          </Card>
        </div>

         



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
