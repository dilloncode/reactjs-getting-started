import React, { Component } from 'react';

import { Stars, Button, Answer, Numbers } from './components'

class Game extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <br />
                <Numbers />
            </div>
         );
    }
}
 
export default Game;