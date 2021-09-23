import React from 'react';
import CartItem from './CartItem';
 

const Cart = (props)=>{
    console.log("render cart",props)
    const {products,handleIncreaseQuantity,handleDecreaseQuantity,handleDeleteItem}   = props;

    return (
        <div className="cart" style={styles}>
            { products.map((product)=>{
                return (
                    <CartItem 
                        product = {product} 
                        key = {product.id}
                        handleIncreaseQuantity = {handleIncreaseQuantity}
                        handleDecreaseQuantity = {handleDecreaseQuantity}
                        handleDeleteItem = {handleDeleteItem}
                        />) 
            }) }
        </div>
    )
}
const styles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
}

export default Cart;