import React from 'react';
import colors from './color_constants'
const NumberButton = (props) =>{
    
    const [numberId] = React.useState(props.numberId);

    let clickHandler = () => console.log('Num', props.numberId);

    return (
        <button 
            className="number"
            style={{backgroundColor:colors[props.status]}}
            onClick={clickHandler}
        >{numberId}</button>
    )}

export default NumberButton;