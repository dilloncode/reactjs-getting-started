import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Game from './Game';
import { Stars, Button, Answer } from './components'

library.add(faStar)

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
