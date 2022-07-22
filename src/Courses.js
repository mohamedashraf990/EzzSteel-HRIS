import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';


function Courses(props) {
    const [course, setCourse] = useState("")
    const [place, setPlace] = useState("")
    const [grade, setGrade] = useState("")
    const [date, setDate] = useState("")
    const [duration, setDuration] = useState("")
    const [unit, setUnit] = useState("")
    const [description, setDescription] = useState("")

    function handleClickSubmit() {
        console.log('i have been pressed')

        const coursesObj = {
            course: course,
            place: place,
            grade: grade,
            date: date,
            duration: duration,
            unit: unit,
            description: description
        }
        axios.post('http://localhost:5000/coursesData', coursesObj).then((response) => {
            console.log(response)
        }).catch(err => {
            console.log(err)
            console.log('an error had occured')
        })

    }


    return (
        <body className="body">
            <div className="containerMinimized" >
                <div class="content">

                    <h2>Applicant Courses Details</h2>
                    <form>
                        <div className="user-details">
                            <div className="input-box">
                                <label>Course</label>
                                <input
                                    onChange={(e) => setCourse(e.target.value)}



                                />
                            </div>
                            <div className="input-box">
                                <label>Place</label>
                                <input

                                    onChange={(e) => setPlace(e.target.value)}

                                />
                            </div>
                            <div className="input-box">
                                <label>Grade</label>
                                <input
                                    onChange={(e) => setGrade(e.target.value)}

                                />
                            </div>

                            <div className="input-box">
                                <label>Date</label>
                                <input
                                    onChange={(e) => setDate(e.target.value)}

                                />
                            </div>

                            <div className="input-box">
                                <label>Duration</label>
                                <input
                                    onChange={(e) => setDuration(e.target.value)}

                                />
                            </div>

                            <div className="input-box">
                                <label>Unit</label>
                                <input
                                    onChange={(e) => setUnit(e.target.value)}

                                />
                            </div>

                            <div className="input-box">
                                <label>Description</label>
                                <input
                                    onChange={(e) => setDescription(e.target.value)}

                                />
                            </div>




                        </div>
                    </form>
                </div>

                <button className="checkButton" type="submit" onClick={handleClickSubmit}>Add Another Education</button>
                <button className="checkButton" type="submit" onClick={handleClickSubmit}>Submit</button>

            </div>

        </body>
    );
}

export default Courses;