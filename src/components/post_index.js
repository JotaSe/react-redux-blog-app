import React, { Component } from 'react';

class PostIndex extends Component {
  componentWillMount() {
    console.log('this will be a good time to call an action creator to fetch posts');
  }

  render() {
    return (<div>List of blog posts</div>);
  }
}

export default PostIndex;
