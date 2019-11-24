import React from 'react'
import Utils from './math_science';
import NumberButton from './number_button'
import StarDisplay from './star_display';
const StarMatch = () => {
  const [starsMaxNumber, setStarsMaxNumber] = React.useState(Utils.random(1,9));
  const numbersMaxNumber = 9;
  const [availableNums, setAvailableNums] = React.useState(Utils.range(1,9));
  const [candidateNums, setCandidateNums] = React.useState([]);

  const candidatesAreWrong = Utils.sum(candidateNums) > starsMaxNumber;

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
    	return 'used';
    }

    if (candidateNums.includes(number)) {
    	return candidatesAreWrong ? 'wrong': 'candidate';
    }
    
    return 'available';
  }

  const onNumberClick = (numberId, currentStatus) => {
    if (currentStatus === 'used'){
      return;
    }

    const newCandidateNums =
      currentStatus === 'available'
      ? candidateNums.concat(numberId)
      : candidateNums.filter(cn => cn !== numberId);

    if(Utils.sum(newCandidateNums) !== starsMaxNumber){
      setCandidateNums(newCandidateNums);
    }else{
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStarsMaxNumber(Utils.randomSumIn(newAvailableNums,9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  }

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            <StarDisplay count={starsMaxNumber} />
          </div>
          <div className="right">
            { Utils.range(1,numbersMaxNumber).map( numberId =>
              <NumberButton 
                key={numberId}
                status={numberStatus(numberId)}
                numberId={numberId}
                onClick={onNumberClick}
              />
            )}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };

  export default StarMatch;