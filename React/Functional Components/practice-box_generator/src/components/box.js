import React from "react";

const Box = (props) => {
    const {color} = props
    const colorFill = {
        backgroundColor: color,
        height: '100px',
        width: '100px',
        margin: '15px',
    }
    return (
        <div style={colorFill}></div>
    );
}

export default Box;