import React from 'react'

export default function ToolTip(props) {
    const style = {
        position:"absolute",
        top:"-5px",
        left:"70px",
        padding:"5px 10px",
        backgroundColor:"black",
        color:"white",
        zIndex:"100"

    }
    return (
        <div style={style}>
            {props.data}
        </div>
    )
}
