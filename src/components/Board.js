import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  createBoard = () => {
    let board = [];
    for (let i = 0; i < 3; i++) {
      let boardRow = [];
      for (let j = 0; j < 3; j++) {
        boardRow.push(this.renderSquare(i * 3 + j));
      }
      board.push(
        <div key={i} className="board-row">
          {boardRow}
        </div>
      );
    }

    return board;
  };

  render() {
    return <div>{this.createBoard()}</div>;
  }
}
