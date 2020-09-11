import React from "react";
import Route from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Posts from "../components/Posts";

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="posts" component={Posts} />
    </Route>
  </Router>
), node);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
