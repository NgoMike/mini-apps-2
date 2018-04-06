import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

const minesProximity = () => {



}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 0,
      col: 0,
      bombs: 0,
      flags: 0,
    };
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MineSweeper</h1>

        </header>
          <div>Board</div>
          <div className="Board">{mines(10)}</div>

      </div>
    );
  }
}

export default App;
