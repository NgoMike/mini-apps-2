import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './gameBoard.jsx';

const makeBoard = (num) => {
  const board = [];
  for(var i = 0; i < num; i++) {
    const row = [];
    for (var j = 0; j < num; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const mines = (num) => {
  const board = makeBoard(num);
  const rowPosition = () => {
    return Math.floor(Math.random() * num); 
  }

  const colPosition =() => {
    return Math.floor(Math.random() * num); 
  }

  for (var i = 0; i < num; i++) {
    let row = rowPosition();
    let col = colPosition();
    board[row][col] = 'X';
  }
  return board;
}

const minesProximity = (board) => {
// loop thru board length
  for (var i = 0; i < board.length - 1; i++) {
    const firstRow = board[0];
    const lastRow = board.length - 1;
    for (var j = 0; j < board[i].length - 1; j++) {
      const firstCol = board[i][0];
      const lastCol = board[i][board[i].length - 1];
      const start = board[0][0];
      const end = board[lastRow][lastCol];

      if (board[i][j] === 'X' && start) { // first num in first row
        board[i][j+1] === 'X' ? 'X' : board[i][j+1]++;
        board[i+1][j] === 'X' ? 'X' : board[i+1][j]++;
        board[i+1][j+1] === 'X' ? 'X' : board[i+1][j+1]++;
      } else if (board[i][j] === 'X' && firstRow && !firstCol && !lastCol) { // first row but not first num or last num
        board[i][j-1] === 'X' ? 'X' : board[i][j-1]++; 
        board[i][j+1] === 'X' ? 'X' : board[i][j+1]++;
        board[i+1][j-1] === 'X' ? 'X' : board[i+1][j-1]++; 
        board[i+1][j] === 'X' ? 'X' : board[i+1][j]++;  
        board[i+1][j+1] === 'X' ? 'X' : board[i+1][j+1]++;
      } else if (board[i][j] === 'X' && firstRow && lastCol) { // last num in first row
        board[i][j-1] === 'X' ? 'X' : board[i][j-1]++; 
        board[i+1][j-1] === 'X' ? 'X' : board[i+1][j-1]++;
        board[i+1][j] === 'X' ? 'X' : board[i+1][j]++; 
      } else if (board[i][j] === 'X' && !firstRow && !lastRow && firstCol) { // first col but not first row or last row
        board[i-1][j] === 'X' ? 'X' : board[i-1][j]++;
        board[i-1][j+1] === 'X' ? 'X' : board[i-1][j+1]++; 
        board[i][j+1] === 'X' ? 'X' : board[i][j+1]++;
        board[i+1][j] === 'X' ? 'X' : board[i+1][j]++;   
        board[i+1][j+1] === 'X' ? 'X' : board[i+1][j+1]++;  
      } else if (board[i][j] === 'X' && lastRow && firstCol) { // last row and first col
        board[i-1][j] === 'X' ? 'X' : board[i-1][j]++; 
        board[i-1][j+1] === 'X' ? 'X' : board[i-1][j+1]++;
        board[i][j+1] === 'X' ? 'X' : board[i][j+1]++; 
      } else if (board[i][j] === 'X' && lastRow && !firstCol && !lastCol) { // last row but not first num or last num
        board[i-1][j-1] === 'X' ? 'X' : board[i-1][j-1]++; 
        board[i-1][j] === 'X' ? 'X' : board[i-1][j]++;   
        board[i-1][j+1] === 'X' ? 'X' : board[i-1][j+1]++; 
        board[i][j-1] === 'X' ? 'X' : board[i][j-1]++;   
        board[i][j+1] === 'X' ? 'X' : board[i][j+1]++;   
      } else if (board[i][j] === 'X' && !firstRow && !lastRow && lastCol) { // first col but not first row or last row
        board[i-1][j-1] === 'X' ? 'X' : board[i-1][j-1]++; 
        board[i-1][j] === 'X' ? 'X' : board[i-1][j]++;   
        board[i][j-1] === 'X' ? 'X' : board[i][j-1]++;   
        board[i+1][j-1] === 'X' ? 'X' : board[i+1][j-1]++; 
        board[i+1][j] === 'X' ? 'X' : board[i+1][j]++;   
      } else if (board[i][j] === 'X' && !firstRow && !lastRow && !firstCol && !lastCol) { // any row besides first or last && any col besides first or last
        board[i-1][j-1] === 'X' ? 'X' : board[i-1][j-1]++; 
        board[i-1][j] === 'X' ? 'X' : board[i-1][j]++;   
        board[i-1][j+1] === 'X' ? 'X' : board[i-1][j+1]++; 
        board[i][j-1] === 'X' ? 'X' : board[i][j-1]++;   
        board[i][j+1] === 'X' ? 'X' : board[i][j+1]++;   
        board[i+1][j-1] === 'X' ? 'X' : board[i+1][j-1]++;
        board[i+1][j] === 'X' ? 'X' :  board[i+1][j]++;   
        board[i+1][j+1] === 'X' ? 'X' : board[i+1][j+1]++; 
      } else if (board[i][j] === 'X' && end) {                     // last num in last row
        board[i-1][j-1] === 'X' ? 'X' : board[i-1][j-1]++; 
        board[i-1][j] === 'X' ? 'X' : board[i-1][j]++;        
        board[i][j-1] === 'X' ? 'X' : board[i][j-1]++;   
      }
    }
  }
  return board;
}

// if there's a mine
  // mine = [1, 1];
  // [0,0] (-1, -1),     [0,1] (-1, 0),         [0,2] (-1, +1)
  // [1,0] (0, -1),                             [1,2] (0, + 1)
  // [2,0] (+1, -1),      [2,1] (+1, 0) ,       [2,2] (+1, +1)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : minesProximity(mines(10)),
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MineSweeper</h1>
        </header>
        <table className="Board">
          <GameBoard rows={this.state.data} />
        </table>
      </div>
    );
  }
}

export default App;
