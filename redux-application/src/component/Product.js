import React, { Component } from 'react'

export class Product extends Component {
    render() {
        console.log("PRODUCT");

        const {product}  = this.props
        return (
            <div>
                {product.name}
            </div>
        )
    }
}

export default Product
