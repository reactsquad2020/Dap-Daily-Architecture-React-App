import React from 'react';
import ReactDOM from 'react-dom';

class Posts extends React.Component {
  render() {
    return (
      <div>
        {/* Here are where the posts will render.*/}
        {this.props.children}
      </div>
    )
  }
}

export default Posts;