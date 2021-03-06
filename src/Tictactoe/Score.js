import React, { PureComponent, Fragment } from "react";

import "../css/Tictactoe/Score.css";

import { GameContext } from "../context/game-context";

class Score extends PureComponent {
  static contextType = GameContext;

  render() {
    const { score } = this.context;
    const { firstPlayer, secondPlayer } = score;

    return (
      <Fragment>
        <div className="score-board left-score">
          <p>{firstPlayer}</p>
        </div>
        <div className="score-board right-score">
          <p>{secondPlayer}</p>
        </div>
      </Fragment>
    );
  }
}

export default Score;
