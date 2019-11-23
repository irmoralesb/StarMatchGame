import React from 'react';
import Utils from './math_science';

const StarDisplay = (props) => (
   <>
    { Utils.range(1,props.count).map(starId =>
        <div key={starId} className="star"/>
      )}
    </>
)

export default StarDisplay;