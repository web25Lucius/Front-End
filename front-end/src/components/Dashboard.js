import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import Registration from './Registration';
import LogIn from './LogIn';


import '../App.css';

function Dashboard (){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Container>
      <Row xs="1" sm="2">
      <Col>
        <Jumbotron>
         <Link to="/userlogin">Log in</Link>
         </Jumbotron>
        </Col>
        <Col>
        <Jumbotron>
        <Link to="/registration">Register</Link>
        </Jumbotron>
        </Col>
      </Row>
        </Container>
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
