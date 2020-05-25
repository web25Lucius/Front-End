import React, {useState} from 'react';
import {BrowserRouter as Route, Link, Switch} from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import '../App.css';
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import axios from 'axios';

function Registration() {
  const [fdata, setFData] = useState({
    fullname: "",
    username: "", 
    email: "", 
    password: "", 
    account: "", 
    terms: false

  });
  
  const onChange= event =>{
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value
   setFData({
     ...fdata,[event.target.name]: value});
  };

  const onSubmit= event => {
    event.preventDefault();
    axios
    .post("https://lambda-howto.herokuapp.com/",{fdata});
  };

  return (
    <div className="App">
      <header className="App-header">
       {/* <h1>Registration Page!!! Welcome to the How-To: Community</h1>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link> */}
       
       <Form onSubmit={onSubmit}>
       <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Label for="fullname" >
          <InputGroupText>Full Name</InputGroupText>
          </Label>
        </InputGroupAddon>
        <Input id="fullname" name="fullname" placeholder="first and last name" value={fdata.fullname}  onChange={onChange} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Label for="username">
          <InputGroupText>Username</InputGroupText>
          </Label>
        </InputGroupAddon>
        <Input   id="username" name="username"  placeholder="choose your username" value={fdata.username} onChange={onChange}/>
      </InputGroup>
      <br />
      <FormGroup>
      
        <Label for="email">Email</Label>
        <Input type="email" id="email" name="email"  placeholder="email address" value={fdata.email} onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" id="password" name="password"  placeholder="create password" value={fdata.password} onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <Label for="account">What kind of experience would you like?</Label>
        <Input type="select" name="account" id="account" value={fdata.account} onChange={onChange}>
          <option value="choose">Please Choose</option>
          <option value="basic">Basic Account</option>
          <option value="premium">Premium Ad Free</option>
        </Input>
      </FormGroup>
      <FormGroup check>
        <Label for="terms">
          <Input checked={fdata.terms} type="checkbox" id="terms" name="terms" onChange={onChange}/>
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