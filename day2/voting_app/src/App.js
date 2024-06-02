import React, { useState } from 'react';
import './App.css';
import VotingOptions from './VotingOptions';

function App() {
  let [votesOptionA, setVotesOptionA] = useState(0);
  let [votesOptionB, setVotesOptionB] = useState(0);

  let optionA = () => {
    setVotesOptionA(votesOptionA + 1);
  };

  let optionB = () => {
    setVotesOptionB(votesOptionB + 1);
  };

  let resetVotes = () => {
    setVotesOptionA(0);
    setVotesOptionB(0);
  };

  let Winner = () => {
    if (votesOptionA > votesOptionB) {
      return 'Option A is the winner!';
    } else if (votesOptionB > votesOptionA) {
      return 'Option B is the winner!';
    } else {
      return 'It\'s a tie!';
    }
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Option</h1>
      <VotingOptions
        votesOptionA={votesOptionA}
        votesOptionB={votesOptionB}
        onVoteOptionA={optionA}
        onVoteOptionB={optionB}
      />
      <button className="reset-button" onClick={resetVotes}>Reset Votes</button>
      <h2>{Winner()}</h2>
    </div>
  );
}

export default App;
