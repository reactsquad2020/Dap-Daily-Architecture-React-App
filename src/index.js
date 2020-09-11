import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EditPost from "../components/EditPost";
import CreatePost from "../components/CreatePost";
import LoginPage from "../components/Login";

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/edit:id" component={EditPost} />
      <Route path="/create" component={CreatePost} />
      <Route path="/login" component={LoginPage} />
    </Route>
  </Router>
), node);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
