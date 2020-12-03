import axios from 'axios';

export const getStudents = () => {
  return axios
    .get('https://nc-student-tracker.herokuapp.com/api/students')
    .then((res) => {
      return res.data.students;
    });
};

export const getStudentsByBlock = (block) => {
  return axios
    .get(`https://nc-student-tracker.herokuapp.com/api/students?block=${block}`)
    .then((res) => {
      return res.data.students;
    });
};

export const getStudent = (studentId) => {
  return axios
    .get(`https://nc-student-tracker.herokuapp.com/api/students/${studentId}`)
    .then((res) => {
      return res.data.student;
    });
};

export const postStudent = (student) => {
  console.log(student);
  return axios
    .post('https://nc-student-tracker.herokuapp.com/api/students', student)
    .then((res) => {
      return res.data;
    });
};
