import React from 'react';
import * as api from './api';
import { Link } from '@reach/router';
import StudentCard from './StudentCard';
import ListFilter from './ListFilter';

class StudentList extends React.Component {
  state = {
    students: [],
    isLoading: true,
    filter: null
  };

  componentDidMount() {
    api.getStudents().then((students) => {
      this.setState({ students, isLoading: false });
    });
  }

  filterChange = (filter) => {
    this.setState({ filter });
  };

  componentDidUpdate(prevProps, prevState) {
    const { filter } = this.state;
    if (filter || filter !== prevState.filter) {
      api.getStudentsByBlock(filter).then((students) => {
        this.setState({ students, isLoading: false });
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="list-container">
        <ListFilter filterChange={this.filterChange} />
        <Link to="/students/add_student">
          <button>Add Student</button>
        </Link>

        <h2>Student List</h2>
        <ul className="student-list">
          <h3>Displaying {this.state.students.length} Students</h3>
          {this.state.students.map((student) => {
            return <StudentCard key={student._id} {...student} />;
          })}
        </ul>
      </div>
    );
  }
}

export default StudentList;
