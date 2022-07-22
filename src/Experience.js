import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

function Experience(props) {

    const [company, setCompany] = useState("")
    const [leavingReason, setLeavingReason] = useState("")
    const [referral, setReferral] = useState("")
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")




    function handleClickSubmit() {
        const experienceObj = {
            company: company,
            leavingReason: leavingReason,
            referral: referral,
            fromDate: fromDate,
            toDate: toDate,
        }

        axios.post('http://localhost:5000/experienceData', experienceObj).then((response) => {
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

                    <h2>Applicant Experiences Details</h2>
                    <form>
                        <div className="user-details">
                            <div className="input-box">
                                <label>Company</label>
                                <input
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>Reason Of Leaving</label>
                                <input

                                    onChange={(e) => setLeavingReason(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>Referral Person</label>
                                <input
                                    onChange={(e) => setReferral(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>From</label>
                                <input
                                    onChange={(e) => setFromDate(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>To</label>
                                <input
                                    onChange={(e) => setToDate(e.target.value)}
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

export default Experience;