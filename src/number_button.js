import React from 'react';
import colors from './color_constants'
const NumberButton = (props) =>{
    
    const [numberId] = React.useState(props.numberId);

    let clickHandler = () => props.onClick(props.numberId, props.status);

    return (
        <button 
            className="number"
            style={{backgroundColor:colors[props.status]}}
            onClick={clickHandler}
        >{numberId}</button>
    )}

export default NumberButton;