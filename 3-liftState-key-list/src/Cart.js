import React from 'react';
import CartItem from './CartItem';
 

const Cart = (props)=>{
    // console.log("render cart",props)
    // // destructuring the props.
    // const {products,handleIncreaseQuantity,handleDecreaseQuantity,handleDeleteItem}   = props;
    // // rendering array of element
    // let array = [25,2,3,4,5];
    // let elements = [<h1>heelo</h1>,<h2>bye</h2>];
    // let elements2 = array.map((item,index)=><h1>{item},{index}</h1>)
    // // elements and elements2 gives an error: key shoud unique. to avoid provide unique key value for particular list
    // // so replace them with elemnets3
    // let elements3 = array.map((item,index)=><h1 key={index}>{item},{index}</h1>)
    // // you can use map in {}.
    // return (
    //     <div>
    //         {elements}
    //         {elements2}
    //         {array.map((item,index)=><h1 key={index}>{item},{index}</h1>)}
    //     </div>
    // )


    let {products,handleIncreaseQuantity,handleDecreaseQuantity,handleDeleteItem} = props;
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