import ProductList from './ProductList';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {fetchPosts} from '../action/posts'

class App extends Component {
  componentDidMount(){
    const {store} = this.props
    console.log("APP mounted")
    store.subscribe(() =>{
      console.log({state:store.getState()})
      console.log({this:this});
      this.forceUpdate();
    })
  }
  render() {
    console.log("APP")
    const {store} = this.props;
    return (
      <div>
        <ProductList dispatch={store.dispatch} productList={store.getState()}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    posts
  }
}

export default App


