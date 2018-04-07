import React from 'react';
import Square from './gameSquare';

const GameRows = (props) => {
  return (
    <tr>{props.rows.map(row => {
      return (
        <Square square={row} />
      )
    })}
    </tr>
  )
}

export default GameRows;
