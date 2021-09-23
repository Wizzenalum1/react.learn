import React from 'react';

const Navbar = (props)=>{
        console.log("render nav bar",props.getCartCount())
        return(
            <div style={style.navbar}>
                <div style={style.cartContainer}>
                    <img style={style.cartImg} src="https://image.flaticon.com/icons/png/512/1170/1170678.png" alt="CART-icon"/>
                    <span style={style.cartCount}>{props.getCartCount()}</span>
                </div>
            </div>
        )
}
const style={
    navbar:{
        backgroundColor: 'deepskyblue',
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    cartContainer:{
        position: 'relative',
        width: '100px',
        margin: '10px',
    },
    cartImg:{
        height:'100%'
    },
    cartCount:{
        position: 'absolute',
        top: '6px',
        right:'5px',
        background: 'yellow',
        height: '1.5em',
        boxSizing: 'border-box',
        borderRadius: '1em',
        textAlign: 'center',
        padding: '3px',
    },

    
}

export default Navbar;
