
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Route, Link, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Registration from './Registration';
import {Button, Form, Input, Label, InputGroup, InputGroupAddon, InputGroupText, Alert} from 'reactstrap';
import '../App.css';
import axios from 'axios';
import * as yup from 'yup';  






let formSchema = yup.object().shape({
  username: yup.string().min(6, 'username must contain at least 6 characters').required('username is required to continue'),
  password: yup.string().min(8, 'password must contain 8 charaters').required('must submit a password to continue')
});



function LogIn(props) {
  const [lFData, setLFData] = useState({
    
    username: "", 
    password: ""
    
  });


  const [greyButton, setGreyButton] = useState(true);
  useEffect(()=>{
    formSchema.isValid(lFData).then(valid => {
      setGreyButton(!valid);
    });
  }, [lFData]);

  const [errorState, setErrorState] = useState({
   
    username: "", 
    password: ""
  });




  const validate = (event) =>{
  yup.reach(formSchema, event.target.name)
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
    .post("https://reqres.in/api/users",lFData)
    .then(response => console.log(`log in complete- username: ${lFData.username} has returned to How To:`, response))
    .catch(err => console.log("Error submitted registration for How To:", err))
  };

  
  const onChange= event =>{
    event.persist()
    validate(event)
   
   setLFData({
     ...lFData,[event.target.name]: event.target.value});
  };

  

 
  return (
    <div className="App">
      <header className="App-header">
       
       <Form onSubmit={onSubmit}>
       
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Label for="username">
          <InputGroupText>username</InputGroupText>
          </Label>
        </InputGroupAddon>
        <Input  id="username" name="username"  placeholder="enter your username" value={lFData.username} onChange={onChange}/>
        {errorState.username.length > 0 ? <Alert color="danger">{errorState.username}</Alert> : null}
      </InputGroup>
      <br />
      <InputGroup>
      <InputGroupAddon addonType="prepend"><Label for="password"><InputGroupText>password</InputGroupText></Label></InputGroupAddon>
        <Input type="password" id="password" name="password"  placeholder="enter password" value={lFData.password} onChange={onChange}  /> 
       
        {errorState.password.length > 0 ? <Alert color="danger">{errorState.password}</Alert> : null}
      </InputGroup>
     
      <Button disabled={greyButton}>Submit</Button>
      
    </Form>



        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
         <Route path="/registration">
            <Registration/>
        </Route>
        </Switch>

        <Link to="/registration">
          <br />
            <p>Need an account? Click here to Sign up.</p>
          </Link>
      </header>
    </div>
  );
}

export default LogIn;






























// function LogIn () {
//   const [data, setData] = useState({
//     username:"",
//     password:""
//   });

   
//   const formSubmit = (event) =>{
//     event.preventDefault();
//     axios
//     .post("https://lambda-howto.herokuapp.com/", {data})
//     .then(res => {
//       setData(res.data); 
//       console.log(`How To returning member username:${data.username} password:${data.password}`, res);
    
//     })
//     .catch(err => console.log(err.response));
//   };

//     const valueChange = (event)=>{
//       event.persist();
    
//       setData({
//         ...data,
//         [event.target.username]: event.target.value,
//         [event.target.password]: event.target.value
//       });

//   };

 




//   return (
//     <Router>

//     <div className="App">
//      <header className="App-header">

//       <Form onSubmit={formSubmit}>

//        <InputGroup>
//         <InputGroupAddon addonType="prepend">
//          <Label for="username">username: &nbsp; </Label>
//         </InputGroupAddon>
//         <Input id="username" name="username" value={data.username} onChange={valueChange} placeholder="enter username" />
         
//        </InputGroup>

//       <br />

//        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//         <InputGroupAddon addonType="prepend">
//          <Label for="password" className="mr-sm-2">password:</Label>
//         </InputGroupAddon>
//         <Input onChange={valueChange} type="password" name="password" id="password" placeholder="enter password" />
      
//       </FormGroup>


//       <p><Button >Submit</Button></p>

//       </Form>


//       <h6><Link to="/registration">Don't have an account? Sign up</Link></h6>


//         <Switch>
//           <Route exact path="/">
//             <Dashboard />
//           </Route>    
//           <Route path="/registration">
//               <Registration />
//           </Route>
//         </Switch>
//       </header>
//     </div>
//   </Router>
//   );
// }

// export default LogIn;











































// import React, {useState, useEffect} from 'react';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import Dashboard from './Dashboard';
// import Registration from './Registration';
// import { Button , Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
// import '../App.css';
// import axios from 'axios';
// import * as yup from "yup";
// // import LandingPage from './LandingPage';

// const formSchema = yup.object().shape({
//   username: yup.string().min(2, "username must be at last two characters").required("required field"),
//   password: yup.string().min(6, "password must be at least 6 characters long").required("required field")
// });

// function LogIn () {
//   const [data, setData] = useState({
//     username:"",
//     password:""
//   });

//   useEffect(()=>{
//     formSchema.isValid(data).then(valid =>{
//       console.log(valid, "data is verified");
//     });
//   },[data]);    

//  const [errorState, setErrorState] = useState({

//   username:"",
//   password:""
// });


// const formSubmit = (event) =>{
//   event.preventDefault();
//   axios
//   .post(" https://lambda-howto.herokuapp.com/", data)
//   .then(res => {
//     setData(res.data); 
//     console.log(`How To returning member username:${data.username} password:${data.password}`, res);
  
//   })
//   .catch(err => console.log(err.response));
// };

//   const valueChange = (event)=>{
//     event.persist();
   
//     setData({
//       ...data,
//       [event.target.username]: event.target.value,
//       [event.target.password]: event.target.value
//     });

//     formSchema.validate({username: '', password: ''}).then(function(value){
//       console.log(value);
//     });
    
//     formSchema.validate({username: '', password: ''}).catch(function(err){
//       err.username('ValidationError');
//       err.errors('ValidationError');
//     });

//    setErrorState({
//      ...errorState,
//      [event.target.name]: errorState.errors[0]
//    });

   

//   };

 




//   return (
//     <Router>

//     <div className="App">
//      <header className="App-header">

//       <Form onSubmit={formSubmit}>

//        <InputGroup>
//         <InputGroupAddon addonType="prepend">
//          <Label for="username">username: &nbsp; </Label>
//         </InputGroupAddon>
//         <Input id="username" name="username" value={data.username} onChange={valueChange} placeholder="enter username" />
//           {errorState.username.length< 2 ? (<p className="error"> {errorState.username} </p>):null}
//        </InputGroup>

//       <br />

//        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//         <InputGroupAddon addonType="prepend">
//          <Label for="password" className="mr-sm-2">password:</Label>
//         </InputGroupAddon>
//         <Input onChange={valueChange} type="password" name="password" id="password" placeholder="enter password" />
//         {errorState.password.length< 6 ? (<p className="error"> {errorState.password} </p>):null}
//       </FormGroup>


//       <p><Button >Submit</Button></p>

//       </Form>


//       <h6><Link to="/registration">Don't have an account? Sign up</Link></h6>


//         <Switch>
//           <Route exact path="/">
//             <Dashboard />
//           </Route>    
//           <Route path="/registration">
//               <Registration />
//           </Route>
//         </Switch>
//       </header>
//     </div>
//   </Router>
//   );
// }

// export default LogIn;