import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import about from './pages/about';
import contact from './pages/contact';
import portfolio from './pages/contact';
import {Route,Link,BrowserRouter as Router} from '../node_modules/react-router-dom';


const myRouter =  (

  <Router>


  <div>

    <ul>
    <li> <Link to = "/">Home</Link> </li>
    <li> <Link to = "/c">Contact</Link> </li>
    <li> <Link to = "/p">Portfolio</Link> </li>
    <li> <Link to = "/a">About</Link> </li>
    </ul>

    <hr /> <hr />

    <Route exact path = "/" component = {App} />
    <Route path = "/a" component = {about} />
    <Route path = "/c" component = {contact} />
    <Route path = "/p" component = {portfolio} />

  </div>

  </Router>

);




ReactDOM.render(
  myRouter,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
