import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import {Button, Form, FormGroup, Input, Label, InputGroup, InputGroupAddon, InputGroupText, Alert} from 'reactstrap';
import '../App.css';
import axios from 'axios';
import * as Yup from 'yup';  




const formSchema = Yup.object().shape({
  fullname: Yup.string().min(2, 'name must be more than 2 characters').required('name is required to continue'),
  username: Yup.string().min(6, 'username must contain at least 6 characters').required('username is required to continue'),
  email: Yup.string().email('valid email is required to continue').required('email is required'),
  password: Yup.string().min(8, 'password must contain 8 charaters').required('must create a password to continue'), 
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'),null], 'when all forms are completed, please click grey submit button').required('please confirm')
});



function Registration() {
  const [fdata, setFData] = useState({
    fullname: "",
    username: "", 
    email: "", 
    password: "", 
    passwordConfirmation: ""
  });
 const [postFData, setPostFData] = useState({});
 const history = useHistory();
 const [greyButton, setGreyButton] = useState(true);
  useEffect(()=>{
    formSchema.isValid(fdata).then(valid => {
      setGreyButton(!valid);
    });
  }, [fdata]);

  const [errorState, setErrorState] = useState({
    fullname: "",
    username: "", 
    email: "", 
    password: "", 
    passwordConfirmation: ""
    
  });




  const validate = (event) =>{
  Yup.reach(formSchema, event.target.name)
     .validate(event.target.value)
     .then(valid => {
      setErrorState({
        ...errorState, 
        [event.target.name]:""
      })
     })
     .catch( err => {
      setErrorState({
        ...errorState, [event.target.name]: err.errors[0]
      })
     })

  };

  const onSubmit= (event) => {
   
    event.preventDefault()
    event.persist()
    validate(event)
    
    
    axios
    .post("https://reqres.in/api/users",fdata)
    .then(response => {
      setPostFData(response.data)
      console.log(`registration submitted- username: ${fdata.username} has joined How To:`, response)
      return history.push("/landingpage")
    })
    .catch(err => console.log("Error submitted registration for How To:", err))
  };

  
  const onChange= event =>{
    event.persist()
    validate(event)
   
   setFData({
     ...fdata,[event.target.name]: event.target.value});
  };

  
  

 
  return (
    <div className="App">
      <header className="App-header">
       
       <Form onSubmit={onSubmit}>
       <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Label for="fullname" >
          <InputGroupText>Full Name</InputGroupText>
          </Label>
        </InputGroupAddon>
        <Input aria-label="full name" aria-required="true" id="fullname" name="fullname" placeholder="first and last name" value={fdata.fullname}  onChange={onChange} />
        {errorState.fullname.length > 0 ? <Alert color="danger">{errorState.fullname}</Alert> : null}
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Label for="username">
          <InputGroupText>Username</InputGroupText>
          </Label>
        </InputGroupAddon>
        <Input aria-label="username" aria-required="true"  id="username" name="username"  placeholder="choose your username" value={fdata.username} onChange={onChange}/>
        {errorState.username.length > 0 ? <Alert color="danger">{errorState.username}</Alert> : null}
      </InputGroup>
      <br />
      <FormGroup>
      
        <Label for="email">Email</Label>
        <Input aria-label="email address" aria-required="true" type="email" id="email" name="email"  placeholder="email address" value={fdata.email} onChange={onChange} />
        {errorState.email.length > 0 ? <Alert color="danger">{errorState.email}</Alert> : null}
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        
        <Input aria-label="password" aria-required="true" type="password" id="password" name="password"  placeholder="create password" value={fdata.password} onChange={onChange}  /> 
       
        {errorState.password.length > 0 ? <Alert color="danger">{errorState.password}</Alert> : null}
      </FormGroup>
      <FormGroup>
        <Label for="passwordConfirmation">Password confirmation</Label>
        
        <Input aria-label="password confirmation" aria-required="true" type="passwordConfirmation" id="passwordConfirmation" name="passwordConfirmation"  placeholder="confirm password" value={fdata.passwordConfirmation} onChange={onChange} />
        
        {errorState.passwordConfirmation.length > 0 ? <Alert color="danger">{errorState.passwordConfirmation}</Alert> : null}
      </FormGroup>
     
     <Button type="submit" disabled={greyButton} >Submit</Button>
    </Form>

        <Link to="/userlogin">
            <p>Already have an account? Click here to Sign in.</p>
          </Link>
      </header>
    </div>
  );
}

export default Registration;

// onclick={()=>history.push("/landingpage")}