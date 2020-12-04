import React, { Component } from 'react';
import { capitalise } from '../utils/capitalise';
import * as api from './api';
import { navigate } from '@reach/router';

class StudentInfo extends Component {
  state = { student: {}, isLoading: true, added: false, deleted: false };

  componentDidMount() {
    api.getStudent(this.props.student_id).then((student) => {
      this.setState({ student, isLoading: false });
    });
  }

  deleteStudent = () => {
    api
      .deleteStudent(this.props.student_id)
      .then(this.setState({ deleted: true }))
      .then(() => {
        navigate('/students', { state: { deleted: true } });
      });
  };

  render() {
    let count = 2;
    let previousSlug = '';

    const { added } = this.props.location.state;
    const { isLoading } = this.state;
    if (isLoading) {
      return <h2>Loading student info...</h2>;
    }
    const {
      student: { name, startingCohort, blockHistory },
    } = this.state;
    return (
      <div className='list-container'>
        <h2>{capitalise(name)}</h2>
        <p>Starting Cohort: {startingCohort}</p>
        <ul>
          {blockHistory.map((item) => {
            return (
              <li key={item.slug === previousSlug ? item.slug + count : item.slug}>
                {item.number} - {item.name}
                {(this.previousSlug = item.slug)}
              </li>
            );
          })}
        </ul>
        <button onClick={this.deleteStudent}>Delete Student</button>
        {added ? <p className='just-added'>Student added to system!</p> : null}
        
        
      </div>
    );
  }
}

export default StudentInfo;
