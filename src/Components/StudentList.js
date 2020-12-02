import React from 'react';
import * as api from './api';
import { Link } from '@reach/router';
import { capitalise } from '../utils/capitalise';

class StudentList extends React.Component {
  state = { students: [], isLoading: true };

  componentDidMount() {
    api.getStudents().then((students) => {
      this.setState({ students, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      console.log('loading');
      return <h2>Loading...</h2>;
    }
    return (
      <div className="list-container">
        <h2>Student List</h2>
        <ul className="student-list">
          <h3>Displaying {this.state.students.length} Students</h3>
          {this.state.students.map((student) => {
            return (
              <li key={student._id}>
                <Link to={`/students/${student._id}`}>
                  <h4>{capitalise(student.name)}</h4>
                </Link>
                Starting Cohort : {student.startingCohort} <br></br>Current
                Block : {student.currentBlock}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default StudentList;
