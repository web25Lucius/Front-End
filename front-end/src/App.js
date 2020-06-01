import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';

import './App.css';
import logo from './how-to-logo.png';
import {Jumbotron, UncontrolledCarousel} from 'reactstrap';


const items = [
  {
    src: 'https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC80OFwvMTkyNDY5XC9wcm9qZWN0c1wvMjQ4NzE0XC9hc3NldHNcL2FlXC80MzEzNjc4XC83OTU2OWZlZjliN2ZiNDA5ZDJmZjMxMTVkOTEyNzljMy0xNTkwMTAyMDE0LmpwZyJ9:cloud:VRLq0KqD2K6bBNCw6QrPAXwmjF5Z6WTaPOxVsdCJbgA?width=2400',
    altText: 'I never cook, but I made this amazing meal for our aniversary.',
    caption: 'I never cook.  Look what I made my partner for our anniversary.',
    header: 'How To: Cook like a chef',
    key: '1'
  },
  {
    src: 'https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC80OFwvMTkyNDY5XC9wcm9qZWN0c1wvMjQ4NzE0XC9hc3NldHNcL2JlXC80MzEzNjc5XC85YmJjMzA1MzMyYTg5YjlhMTg3YmYyOWNiMDgyYjUwNC0xNTkwMTAyMTkxLmpwZyJ9:cloud:UXMpV4Navkre1zzeztVsHFlZB5g5kXQEui2ER-zsf0k?width=2400',
    altText: 'living plant, proof you can learn how to get a green thumb',
    caption: 'this is the first plant I did not kill.',
    header: 'How To: Grow a Green Thumb',
    key: '2'
  },
  {
    src: 'https://cdn-assets-cloud.frontify.com/s3/frontify-cloud-files-us/eyJwYXRoIjoiZnJvbnRpZnlcL2FjY291bnRzXC80OFwvMTkyNDY5XC9wcm9qZWN0c1wvMjQ4NzE0XC9hc3NldHNcLzZmXC80MzEzNjgwXC9iZDMwOGU0ODI4MGUxOTM5MzNhOWEyYjkxN2MzMTdjZi0xNTkwMTAyMzgzLmpwZyJ9:cloud:2eel_D9dTTdbQdmnxj3ERjaL3BgFjVgw-tNDiswH8AY?width=2400',
    altText: 'computer programming',
    caption: 'I made my own webpage.',
    header: 'How To: build a single page application',
    key: '3'
  }
]


function App(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Jumbotron>
        <Link to="/dashboard">
        <img src={logo} className="App" alt="logo" />
        </Link>
        
         <h1> <br /> Ready to build a better you?</h1>
         </Jumbotron>
       
        <div className="App-smaller">
         <UncontrolledCarousel items={items} />
         </div>


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
          <Route exact path="/landingpage">
         <LandingPage />
        </Route>
        </Switch>
          
      </header>
    </div>
    </Router>
  );
}

export default App;
