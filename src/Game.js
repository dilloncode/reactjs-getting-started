import React, { Component } from 'react';

import { Stars, Button, Answer, Numbers } from './components'

class Game extends Component {
    state = {
        selectedNumbers: []
    };
    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers} />
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers} />
            </div>
        );
    }
}

export default Game;