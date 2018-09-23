import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Stars = (props) => {
    return (
        <div className="col-5">
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
        </div>
    );
}

export const Button = (props) => {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    );
}

export const Answer = (props) => {
    return (
        <div className="col-5">
            ...
        </div>
    );
}

export const Numbers = (props) => {
    return ( 
        <div className="card text-center">
            <div>
                <span>1</span>
                <span className="selected">2</span>
                <span className="used">3</span>
            </div>
        </div>
     );
}