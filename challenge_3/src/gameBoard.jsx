import React from 'react';
import GameRows from './gameRows';

const GameBoard = (props) => {
  return (
    <tbody >
      { props.rows.map(row => {
        return (
          <GameRows rows={row} className="Rows" />
        )
      })}
    </tbody>
  );
}

export default GameBoard;
