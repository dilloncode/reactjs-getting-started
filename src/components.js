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
        <button className="btn btn-success">
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
    <div className="col-2">
      {button}
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