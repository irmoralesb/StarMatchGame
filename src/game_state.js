import React from 'react';
import Utils from './math_science'

//Custom Hook
const useGameState = () => {

  const [starsMaxNumber, setStarsMaxNumber] = React.useState(Utils.random(1,9));
  const [availableNums, setAvailableNums] = React.useState(Utils.range(1,9));
  const [candidateNums, setCandidateNums] = React.useState([]);
  const [secondsLeft, setSecondsLeft] = React.useState(10);

  React.useEffect(() =>{
    if (secondsLeft > 0 && availableNums.length > 0){
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  })

  const setGameState = (newCandidateNums) =>{
    if(Utils.sum(newCandidateNums) !== starsMaxNumber){
      setCandidateNums(newCandidateNums);
    } else{
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStarsMaxNumber(Utils.randomSumIn(newAvailableNums,9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  }
  return {
    starsMaxNumber,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  };
};


  export default useGameState;