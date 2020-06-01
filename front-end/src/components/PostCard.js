import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import Registration from './Registration';
import '../App.css';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import fakeData from './fakeData';

function PostCard(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div>
      {fakeData.map((element, key)=>{
        console.log(element)
           return (
            <Card>
              <CardBody>
                <CardTitle>{element.title}</CardTitle>
                <CardSubtitle>by: {element.username}</CardSubtitle>
              </CardBody>
             <CardImg width="100%" src={element.img} alt={element.title}/>
             <CardBody>
             <CardText key={element.id}>{element.posttext}</CardText>
              <Link to="#">Likes: {element.likes}</Link> 
              <Link to="#">&nbsp; Comment </Link>
            </CardBody>
           </Card>
           )
         })}
         </div>
        </header>
         
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
        </Switch>
          
      
    </div>
    </Router>
  );
}

export default PostCard;

