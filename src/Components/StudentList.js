import React from 'react';
import * as api from './api';

class StudentList extends React.Component {
  state = { students: [], isLoading: true };

  componentDidMount() {
    api.getStudents().then((students) => {
      this.setState({ students, isLoading: false });
    });
  }

  render() {
      if (this.isLoading) {
        console.log("loading")
        return <h2>Loading...</h2>;  
    }
    return (
      <div>
        <h1>Student List</h1>
        <ul className='student-list' >
          {this.state.students.map((student) => {
            return (
                <li key={student._id}>
                <h4>{student.name}</h4>
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
