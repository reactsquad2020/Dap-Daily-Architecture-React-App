import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CreatePostComp from './components/CreatePost';
import EditPostComp from './components/EditPost';
import NewsfeedPosts from './components/Newsfeed';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={EditPostComp} />
        <Route path='/create' component={CreatePostComp} />
        <Route path='/show/:id' component={NewsfeedPosts} />
      </div>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();