import React, {useState} from 'react';
import {BrowserRouter as Route, Link, Switch} from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import '../App.css';
import Dashboard from './Dashboard';
import LogIn from './LogIn';

function Registration() {
  const [fname, setFname] = useState('');
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
          <Label for="fullname" >
          <InputGroupText>Full Name</InputGroupText>
          </Label>
        </InputGroupAddon>
        <Input id="fullname" name="fullname" placeholder="first and last name"   onChange={event=>{
          setFname(event.target.value);
          debugger
        }} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Username</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="choose your username" />
      </InputGroup>
      <br />
      <FormGroup>
      
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email address" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="create password" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">What kind of experience would you like?</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Basic Account</option>
          <option>Premium Ad Free</option>
        </Input>
      </FormGroup>

      <FormGroup tag="fieldset">
        <legend>Required</legend>
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
      </header>
    </div>
  );
}

export default Registration;