import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/EditPost';
import Create from './components/CreatePost';
import LoginPage from './components/Login';
import NewsfeedPosts from './components/Newsfeed';
import CreatePostComp from "./components/CreatePost";
import EditPostComp from "./components/EditPost";

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
    <Route path="/posts" component={NewsfeedPosts} />
      <Route path="/edit:id" component={EditPostComp} />
      <Route path="/create" component={CreatePostComp} />
      <Route path="/login" component={LoginPage} />
    </Route>
  </Router>
));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
