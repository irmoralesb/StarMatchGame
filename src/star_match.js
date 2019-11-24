import React from 'react'
import Utils from './math_science';
import NumberButton from './number_button'
import StarDisplay from './star_display';
import PlayAgain from './play_again';
import useGameState from './game_state';

const StarMatch = (props) => {
  const numbersMaxNumber = 9;
  const {
    starsMaxNumber,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  } = useGameState();

  const candidatesAreWrong = Utils.sum(candidateNums) > starsMaxNumber;
  const gameStatus = availableNums.length === 0
  ? 'won'
  :secondsLeft === 0 ? 'lost' : 'active';
    
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
    if (gameStatus !== 'active' || currentStatus === 'used'){
      return;
    }

    const newCandidateNums = 
      currentStatus === 'available'
      ? candidateNums.concat(numberId)
      : candidateNums.filter(cn => cn !== numberId);

    setGameState(newCandidateNums);
  }

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {gameStatus !== 'active' ? (
              <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/>
            ) : (
              <StarDisplay count={starsMaxNumber} />
            )}
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
            <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
    );
  };

  export default StarMatch;