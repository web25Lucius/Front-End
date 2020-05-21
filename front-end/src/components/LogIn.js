import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Registration from './Registration';
import { Button , Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

function LogIn () {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       

      <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Log in with email address</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="enter email" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
 


       <Button color outline="primary"> <Link to="/registration">Don't have an account? Sign up</Link> </Button>
       
          
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>    
            <Route path="/registration">
              <Registration />
            </Route>
        </Switch>

        {/* <span> Still not sure?  While you're here, why not &nbsp; 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn this is the Log in page
        </a>
         </span> */}
      </header>
    </div>
    </Router>
  );
}

export default LogIn;