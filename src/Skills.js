import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
function Skills(props) {
    const [skillType, setSkillType] = useState("")
    const [skillGrade, setSkillGrade] = useState("")
    const [description, setDescription] = useState("")

    function handleClickSubmit() {
        const skillsObj = {
            skillType: skillType,
            skillGrade: skillGrade,
            description: description
        }

        axios.post('http://localhost:5000/skillsData', skillsObj).then((response) => {
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

                    <h2>Applicant Skills Details</h2>
                    <form>
                        <div className="user-details">
                            <div className="input-box">
                                <label>Skills Type</label>
                                <input
                                    onChange={(e) => setSkillType(e.target.value)}

                                />
                            </div>
                            <div className="input-box">
                                <label>Skills Grade</label>
                                <input
                                    onChange={(e) => setSkillGrade(e.target.value)}

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
                <button className="checkButton" type="submit" onClick={handleClickSubmit}>Add Another Skill</button>
                <button className="checkButton" type="submit" onClick={handleClickSubmit}>Submit</button>


            </div>

        </body>

    );
}

export default Skills;