import React, { useState } from 'react';
import { capitalise } from '../utils/capitalise';
import { Link } from '@reach/router';

const StudentCard = ({
  _id,
  name,
  startingCohort,
  currentBlock,
  gradStudent
}) => {
  const [isGrad, setIsGrad] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  return (
    <li>
      <Link to={`/students/${_id}`}>
        <h4>{capitalise(name)}</h4>
      </Link>
      Starting Cohort : {startingCohort} <br></br>Current Block : {currentBlock}
      {isGrad || isRepeat ? (
        isGrad ? (
          <p className="stud_graduated">Student Graduated</p>
        ) : (
          <p className="stud_repeated">Student Repeating</p>
        )
      ) : (
        <span className="grad_buttons">
          <button
            onClick={() => {
              gradStudent(_id, true);
              setIsGrad(true);
            }}
          >
            Graduate
          </button>
          <button
            onClick={() => {
              gradStudent(_id, false);
              setIsRepeat(true);
            }}
          >
            Repeat Block
          </button>
        </span>
      )}
    </li>
  );
};

export default StudentCard;
