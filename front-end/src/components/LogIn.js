
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import {Button, Form, Input, Label, InputGroup, InputGroupAddon, InputGroupText, Alert} from 'reactstrap';
import '../App.css';
import axios from 'axios';
import * as Yup from 'yup';  






const formSchema = Yup.object().shape({
  username: Yup.string().min(6, 'username must be least 6 characters').required('username is required'),
  password: Yup.string().min(8, 'password must contain 8 charaters').required('must submit a password to continue.  click grey submit button.')
});



function LogIn() {
  const [lFData, setLFData] = useState({
    username: "", 
    password: ""
    
  });

  const [postlfData, setPostlfData] = useState ({});
  const history = useHistory();
  const [errorState, setErrorState] = useState({
   
    username: "", 
    password: ""
  });
 const [greyButton, setGreyButton] = useState(true);

  useEffect(()=>{
    formSchema.isValid(lFData).then(valid => {
      setGreyButton(!valid);
    });
  }, [lFData])


  const validate = (event) =>{
  Yup.reach(formSchema, event.target.name)
     .validate(event.target.value)
     .then(valid => {
      setErrorState({
        ...errorState, 
        [event.target.name]:""
      });
     })
     .catch( err => {
      setErrorState({
        ...errorState, 
        [event.target.name]: err.errors[0]
      });
    });

      setLFData({
        ...lFData,
        [event.target.name]: event.target.value

     });
    
    }
 

  const formSubmit= (event) => {
    event.preventDefault()
    event.persist()
    validate(event)
     axios
     .post("https://reqres.in/api/users", lFData)
    // .post("https://lambda-howto.herokuapp.com/", lFData)
     .then(res => {
      setPostlfData(res.data)
      console.log(`log in complete`, res)
      return history.push("/landingpage")
    })
    .catch(err => console.log("Error submitting sign in for How To:", err)
    )}

  const onChange= event =>{
    event.persist()
    validate(event)
   
   setLFData({
     ...lFData,[event.target.name]: event.target.value});
  };



 
  return (
    <div className="App">
      <header className="App-header">
       
       <Form onSubmit={formSubmit}>
       
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Label for="username">
          <InputGroupText>username</InputGroupText>
          </Label>
        </InputGroupAddon>
        <Input  aria-label="username" aria-required="true" id="username" name="username"  placeholder="enter your username" value={lFData.username} onChange={onChange}/>
        {errorState.username.length > 0 ? <Alert color="danger">{errorState.username}</Alert> : null}
      </InputGroup>
      <br />
      <InputGroup>
      <InputGroupAddon addonType="prepend"><Label for="password"><InputGroupText>password</InputGroupText></Label></InputGroupAddon>
        <Input aria-label="password" aria-required="true" type="password" id="password" name="password"  placeholder="enter password" value={lFData.password} onChange={onChange}  /> 
       
        {errorState.password.length > 0 ? <Alert color="danger">{errorState.password}</Alert> : null}
      </InputGroup>
      <br />
      
     
      <Button type="submit" disabled={greyButton}>Submit</Button>
      </Form>

        
        <Link to="/registration">
          <br />
            <p>Need an account? Click here to Sign up.</p>
          </Link>
      </header>
    </div>
  );
}


export default LogIn;


// useEffect(()=> {
//   formSchema.isValid(formState).then(valid=> {
//       // setButtonDisabled(!valid);
//       <Redirect to="/" />
      
//   });
// }, [postState])


//   setFormState({
//     ...formState,
//     [e.target.name]: e.target.value
//   });<Redirect to={location =>({...location, pathname: "/landingpage"})}></Redirect>

// useEffect(() => {History.push("/landingpage")}, []);

