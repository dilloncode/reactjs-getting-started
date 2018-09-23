import React from 'react';
import range from 'lodash/range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Stars = (props) => {
  return (
    <div className="col-5">
      {range(props.numberOfStars).map(i =>
        <FontAwesomeIcon icon="star" key={i} />
      )}
    </div>
  );
}

export const Button = (props) => {
  let button;
  switch (props.answerIsCorrect) {
    case true:
      button =
        <button className="btn btn-success" onClick={props.acceptAnswer}>
          <FontAwesomeIcon icon="check" />
        </button>;
      break;
    case false:
      button =
        <button className="btn btn-danger">
          <FontAwesomeIcon icon="times" />
        </button>;
      break;
    default:
      button =
        <button
          className="btn"
          onClick={props.checkAnswer}
          disabled={props.selectedNumbers.length === 0}
        >
          =
        </button>;
      break;
  }

  return (
    <div className="col-2 text-center">
      {button}
      <br /> <br />
      <button
        className="btn btn-warning btn-sm"
        onClick={props.redraw}
        disabled={props.redraws === 0}
      >
        <FontAwesomeIcon icon="sync" /> {props.redraws}
      </button>
    </div>
  );
}

export const Answer = (props) => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) =>
        <span key={i} onClick={() => props.unselectNumber(number)}>
          {number}
        </span>
      )}
    </div>
  );
}

export const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.usedNumbers.includes(number)) {
      return 'used';
    }
    if (props.selectedNumbers.includes(number)) {
      return 'selected';
    }
  }
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span
            key={i}
            className={numberClassName(number)}
            onClick={() => props.selectNumber(number)}
          >
            {number}
          </span>
        )}
      </div>
    </div>
  );
}

Numbers.list = range(1, 10);

export const DoneFrame = (props) => {
  return (
    <div className="text-center">
      <h2>{props.doneStatus}</h2>
      <button className="btn btn-secondary" onClick={props.resetGame}>
        Play Again
      </button>
    </div>
  );
}
