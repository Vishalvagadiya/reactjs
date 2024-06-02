import React from 'react';

const VotingOptions = ({ votesOptionA, votesOptionB, onVoteOptionA, onVoteOptionB }) => {
  return (
    <div className="voting-options">
      <div className="option">
        <h2>Option A</h2>
        <p>{votesOptionA} votes</p>
        <button onClick={onVoteOptionA}>Vote for Option A</button>
      </div>
      <div className="option">
        <h2>Option B</h2>
        <p>{votesOptionB} votes</p>
        <button onClick={onVoteOptionB}>Vote for Option B</button>
      </div>
    </div>
  );
};

export default VotingOptions;
