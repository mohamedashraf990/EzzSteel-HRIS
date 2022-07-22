import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
function Education(props) {

    const [country, setCountry] = useState("")
    const [univeristy, setUniversity] = useState("")
    const [specialization, setSpecialization] = useState("")
    const [certificate, setCertificate] = useState("")
    const [major, setMajor] = useState("")
    const [degree, setDegree] = useState("")
    const [graduationDate, setGraduationDate] = useState("")
    const [description, setDescription] = useState("")




    function handleClickSubmit() {
        const educationObj = {
            country: country,
            univeristy: univeristy,
            specialization: specialization,
            certificate: certificate,
            major: major,
            degree: degree,
            graduationDate: graduationDate,
            description: description
        }

        axios.post('http://localhost:5000/educationData', educationObj).then((response) => {
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

                    <h2>Applicant Education Details</h2>
                    <form>
                        <div className="user-details">
                            <div className="input-box">
                                <label>Country</label>
                                <input

                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>University</label>
                                <input
                                    onChange={(e) => setUniversity(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>Specialization</label>
                                <input
                                    onChange={(e) => setSpecialization(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>Certificate</label>
                                <input
                                    onChange={(e) => setCertificate(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>Major</label>
                                <input
                                    onChange={(e) => setMajor(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>Degree</label>
                                <input
                                    onChange={(e) => setDegree(e.target.value)}
                                />
                            </div>



                            <div className="input-box">
                                <label>Graduation Date</label>
                                <input
                                    onChange={(e) => setGraduationDate(e.target.value)}
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

export default Education;