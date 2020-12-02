import axios from 'axios';

export const getStudents = () => {
  return axios
    .get('https://nc-student-tracker.herokuapp.com/api/students')
    .then((res) => {
      return res.data.students;
    });
};
