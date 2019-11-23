import React from 'react'
import Utils from './math_science';
import NumberButton from './number_button'
import StarDisplay from './star_display';
const StarMatch = () => {
  const [stars_max_number, set_stars_max_number] = React.useState(Utils.random(1,9));
  const numbers_max_number = 9;
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            <StarDisplay count={stars_max_number} />
          </div>
          <div className="right">
            { Utils.range(1,numbers_max_number).map( numberId =>
              <NumberButton key={numberId} numberId={numberId}/>
            )}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };

  export default StarMatch;