import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Game';
import { Stars, Button, Answer } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Game />
        <Stars />
        <Button />
        <Answer />
      </div>
    );
  }
}

export default App;
