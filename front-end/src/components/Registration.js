import React from 'react';
import {BrowserRouter as Route, Link, Switch} from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label, InputGroup, InputGroupAddon, InputGroupText, FormText} from 'reactstrap';
import '../App.css';
import Dashboard from './Dashboard';
import LogIn from './LogIn';

function Registration() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <h1>Registration Page!!! Welcome to the How-To: Community</h1>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link> */}
       
       <Form>
       <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Full Name</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="first and last name" />
      </InputGroup>
      <br />
      <FormGroup>
      
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email address" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="create password" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Basic Account</option>
          <option>Premium Ad Free</option>
        </Input>
      </FormGroup>

      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            I am 18 years of age or older
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            I am under 18 years of age
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          I have read all terms and conditions.
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>



        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
         <Route path="/userlogin">
            <LogIn/>
        </Route>
        </Switch>

        <Link to="/userlogin">
            <p>Already have an account? Click here to Sign in.</p>
          </Link>

        {/* <span> Still not sure?  While you're here, why not &nbsp; 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         this is the registration page
        </a>
        </span> */}
      </header>
    </div>
  );
}

export default Registration;