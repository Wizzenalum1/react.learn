import React from 'react';

const styles = {
    image:{
        height:110,
        width:110,
        border:4,
        backgroundColor:'#ccc'
    }
}

// class based component
const CartItem = (props)=>{
    const { price,title,qty,img } = props.product;
    const {product,handleIncreaseQuantity,handleDecreaseQuantity,handleDeleteItem}   = props;
    console.log("render cart Item");
    return(
        <div id="first-item" className="cart-item">
            {/* <div>{props.jsx}</div> */}
            <div className =  "left-block">
                <img style = {styles.image} src={img} alt="./logo.png"/>
            </div>
            <div className = "right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>price: {price}</div>
                <div className="quantity" style={{color:'#777'}}>Qty: {qty}</div>
                <div className = "cart-item-actions">
                    <img alt = "increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/1828/1828926.png"
                        onClick = {()=>handleIncreaseQuantity(product)} 
                    />
                    <img alt = "decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/1828/1828906.png"
                        onClick = {()=>handleDecreaseQuantity(product)}
                    />
                    <img alt = "delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                        onClick = {()=>handleDeleteItem(product)}
                    />
                </div>
            </div>
        </div>
    )
    
}


export default CartItem;