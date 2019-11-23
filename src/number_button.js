import React from 'react';

const NumberButton = (props) =>{
    
    const [numberId] = React.useState(props.numberId);

    let clickHandler = () => console.log('Num', props.numberId);

    return (
        <button className="number" onClick={clickHandler}>{numberId}</button>
    )}

export default NumberButton;