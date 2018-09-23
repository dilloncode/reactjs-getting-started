import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faCheck, faTimes, faSync } from '@fortawesome/free-solid-svg-icons'
import './App.css';

import Game from './Game';

library.add(faStar, faCheck, faTimes, faSync);

class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
