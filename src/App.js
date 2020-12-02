import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import StudentList from './Components/StudentList';
import { Router } from '@reach/router';
import StudentInfo from './Components/StudentInfo';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <StudentList path="/students" />
        <StudentInfo path="/students/:student_id" />
      </Router>
    </div>
  );
}

export default App;
