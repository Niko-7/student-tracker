import React from 'react';
import { capitalise } from '../utils/capitalise';
import { Link } from '@reach/router';

const StudentCard = (props) => {
  return (
    <li>
      <Link to={`/students/${props._id}`}>
        <h4>{capitalise(props.name)}</h4>
      </Link>
      Starting Cohort : {props.startingCohort} <br></br>Current Block :{' '}
      {props.currentBlock}
      <button
        onClick={() => {
          props.gradStudent(props._id,true);
        }}
      >
        Graduate
      </button>
      <button
        onClick={() => {
          props.gradStudent(props._id, false);
        }}
      >
        Repeat Block
      </button>
    </li>
  );
};

export default StudentCard;
