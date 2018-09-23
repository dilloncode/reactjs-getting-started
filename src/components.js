import React from 'react';
import range from 'lodash/range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random() * 9);

  return (
    <div className="col-5">
      {range(numberOfStars).map(i =>
        <FontAwesomeIcon icon="star" key={i} />
      )}
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
      {props.selectedNumbers.map((number, i) =>
        <span key={i}>{number}</span>
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
          <span key={i} className={numberClassName(number)}>{number}</span>
        )}
      </div>
    </div>
  );
}

Numbers.list = range(1, 10);