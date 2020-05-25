
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Registration from './Registration';
import { Button , Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import '../App.css';
import axios from 'axios';


function LogIn () {
  const [data, setData] = useState({
    username:"",
    password:""
  });

   
  const formSubmit = (event) =>{
    event.preventDefault();
    axios
    .post(" https://lambda-howto.herokuapp.com/", {data})
    .then(res => {
      setData(res.data); 
      console.log(`How To returning member username:${data.username} password:${data.password}`, res);
    
    })
    .catch(err => console.log(err.response));
  };

    const valueChange = (event)=>{
      event.persist();
    
      setData({
        ...data,
        [event.target.username]: event.target.value,
        [event.target.password]: event.target.value
      });

  };

 




  return (
    <Router>

    <div className="App">
     <header className="App-header">

      <Form onSubmit={formSubmit}>

       <InputGroup>
        <InputGroupAddon addonType="prepend">
         <Label for="username">username: &nbsp; </Label>
        </InputGroupAddon>
        <Input id="username" name="username" value={data.username} onChange={valueChange} placeholder="enter username" />
         
       </InputGroup>

      <br />

       <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <InputGroupAddon addonType="prepend">
         <Label for="password" className="mr-sm-2">password:</Label>
        </InputGroupAddon>
        <Input onChange={valueChange} type="password" name="password" id="password" placeholder="enter password" />
      
      </FormGroup>


      <p><Button >Submit</Button></p>

      </Form>


      <h6><Link to="/registration">Don't have an account? Sign up</Link></h6>


        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>    
          <Route path="/registration">
              <Registration />
          </Route>
        </Switch>
      </header>
    </div>
  </Router>
  );
}

export default LogIn;











































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