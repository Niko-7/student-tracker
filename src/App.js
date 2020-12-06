import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import StudentList from './Components/StudentList';
import { Router } from '@reach/router';
import StudentInfo from './Components/StudentInfo';
import AddStudent from "./Components/AddStudent"

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Router>
        <StudentList path='/students' />
        <AddStudent path='/students/add_student' />
        <StudentInfo path='/students/:student_id' />
      </Router>
    </div>
  );
}

export default App;
