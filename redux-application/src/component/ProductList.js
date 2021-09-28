import React, { Component, Fragment } from 'react'
import { addUser } from '../action';
import Product from './Product'

export class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputText:""
        }
    }

    handleAdd=(e)=>{
        let user = {name:this.state.inputText}
        this.props.dispatch(addUser(user));
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({inputText:e.target.value});
    }
    render() {
        console.log("PRODUCTLIST");
        const productList = this.props.productList;
        return (
            <Fragment>
                <div>
                    <input onChange={this.handleChange}type="text"placeholder="place name"></input>
                    <button onClick={this.handleAdd}>add name</button>
                </div>
                <div>
                   {productList.map((value,index)=>{return <Product key={index} product={value}/>})}
                </div>
            </Fragment>
        )
    }
}

export default ProductList
