import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
function NavBar(props) {
    return (
        <div>
            <nav>
                <div className="logo">
                    <p>EzzSteel HRIS</p>
                </div>
                <ul>
                    <Link to="/UserInfo"> <li>Basic Data</li></Link>
                    {/* <li>  <Link to="/usersearchFlight"> User Search Flight</Link></li> */}
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Courses</li>
                    <li>Experience</li>
                    <li>Attachments & Save</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;