import React from 'react';
import StarMatch from './star_match';
const App = () => {
  const [gameId, setGameId] = React.useState(1);

  return (
    <StarMatch key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
  );
}

export default App;
