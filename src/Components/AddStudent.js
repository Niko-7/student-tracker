import React, { Component } from 'react';
import * as api from './api';
import { navigate } from '@reach/router';


class AddStudent extends Component {
  state = { student: { name: '', startingCohort: '' } };

  handleChange = (event) => {
    this.setState({
      student: {
        ...this.state.student,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    api.postStudent(this.state.student).then((res) => {
      navigate(`/students/${res.student._id}`, { state: { added: true } });
    });
  };

  render() {
    return (
      <form className='add_student' onSubmit={this.handleSubmit}>
        <div className='form_wrap'>
          <h3>Add A Student</h3>
          <label>
            Student Name:
            <input
              type='text'
              name='name'
              id='name'
              value={this.state.student.name}
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <br></br>
          <label>
            Starting Cohort:
            <input
              type='text'
              name='startingCohort'
              id='startingCohort'
              value={this.state.student.startingCohort}
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <br></br>
          <button type='submit' className="form_btn">Submit</button>
        </div>
      </form>
    );
  }
}

export default AddStudent;
