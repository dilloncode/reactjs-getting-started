import React, { Component } from 'react';

import { Stars, Button, Answer, Numbers } from './components'

class Game extends Component {
  state = {
    selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
  };

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.includes(clickedNumber)) return;
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  };

  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={this.state.randomNumberOfStars} />
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers} />
        </div>
        <br />
        <Numbers
          selectedNumbers={this.state.selectedNumbers}
          selectNumber={this.selectNumber}
        />
      </div>
    );
  }
}

export default Game;