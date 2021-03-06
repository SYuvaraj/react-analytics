import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import {BrowserRouter,Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphQL from '../src/GraphQLComp';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component = {Login} />
      <Route  path="/dashboard" component = {Dashboard} />
      <Route  path="/graphql" component = {GraphQL} />
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
