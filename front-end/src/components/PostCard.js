import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import Registration from './Registration';
import '../App.css';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'

function PostCard(props){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <div>
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.username}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={props.img} alt={props.title}/>
        <CardBody>
          <CardText>{props.posttext}</CardText>
          <Link to="#">Like</Link>
          <Link to="#">Comment </Link>
        </CardBody>
      </Card>
    </div>
        
         
        <Switch>
          <Route path="/userlogin">
            <LogIn />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route exact path="/">
            <Dashboard/>
          </Route>
        </Switch>
          
      </header>
    </div>
    </Router>
  );
}

export default PostCard;
