import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/posts'
class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  


  render() {
    return (
      <div>
        App
      </div>
    )
  }
}
const mapStatesToComponent=(state)=>{
  return {
    posts:state.posts
  }
}
export default connect(mapStatesToComponent)(App);
