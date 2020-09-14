import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CreatePostComp from './components/CreatePost';
import EditPostComp from './components/EditPost'; 
import LoginComp from './components/Login';
import ViewPost from './components/SeePost';
import LandingComp from './components/LandingPage';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={LandingComp} />
        <Route path='/edit/:id' component={EditPostComp} />
        <Route path='/create' component={CreatePostComp} />
        <Route path='/show/:id' component={ViewPost} />
        <Route path='/login' component={LoginComp} />
        <Route path='/newsfeed' component={App} />
      </div>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();