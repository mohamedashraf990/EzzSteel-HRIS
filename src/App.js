
import './App.css';
import NavBar from './NavBar';
import BasicData from './BasicData';
import "./NavBar.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useHistory
} from "react-router-dom";
import Education from './Education';
import Skills from './Skills';
import Courses from './Courses';
import Experience from './Experience';
function App() {
  return (
    <>

      <Router>
        <div>
          <nav>
            <div className="logo">
              <p>EzzSteel HRIS</p>
            </div>
            <ul>
              <Link to="/BasicData"> <li>Basic Data</li></Link>
              <Link to="/Education"> <li>Education</li></Link>
              {/* <li>  <Link to="/usersearchFlight"> User Search Flight</Link></li> */}
              <Link to="/Skills"> <li>Skills</li></Link>
              <Link to="/Courses"> <li>Courses</li></Link>
              <Link to="/Experience"> <li>Experience</li></Link>
              <Link to="/Attachments"> <li>Attachments & Save</li></Link>

            </ul>
          </nav>
          <Routes>

            <Route path="/BasicData" element={<BasicData />} exact />
            <Route path="/Education" element={<Education />} exact />
            <Route path="/Skills" element={<Skills />} exact />
            <Route path="/Courses" element={<Courses />} exact />
            <Route path="/Experience" element={<Experience />} exact />
          </Routes>

        </div>

      </Router>
    </>
  );
}

export default App;
