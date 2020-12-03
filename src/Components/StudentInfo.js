import React, { Component } from 'react';
import { capitalise } from '../utils/capitalise';
import * as api from './api';

class StudentInfo extends Component {
  state = { student: {}, isLoading: true, added: false};

  componentDidMount() {
    api.getStudent(this.props.student_id).then((student) => {
      this.setState({ student, isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <h2>Loading student info...</h2>;
    }
    const {
      student: { name, startingCohort, blockHistory }
    } = this.state;
    return (
      <div className="list-container">
        <h2>{capitalise(name)}</h2>
        <p>Starting Cohort: {startingCohort}</p>
        <ul>
          {blockHistory.map((item) => {
            return (
              <li key={item.slug}>
                {item.number} - {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default StudentInfo;
