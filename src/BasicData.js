import React from 'react';
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
    useHistory
} from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";
function BasicData(props) {
    const [jobField1, setJobField1] = useState("")
    const [jobField2, setJobField2] = useState("")
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [mobileNumber, setMobileNumber] = useState(0)
    const [gender, setGender] = useState("")
    const [socialStatus, setSocialStatus] = useState("")
    const [address, setAddress] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState(0)
    const [nationalID, setNationalID] = useState(0)
    const [careerLevel, setCareerLevel] = useState("")
    const [militaryStatus, setMilitaryStatus] = useState("")
    const [militaryReasons, setMilitaryReasons] = useState("")
    const [nationality, setNationality] = useState("")
    const [expectedSalary, setExpectedSalary] = useState(0)
    const [currentSalary, setCurrentSalary] = useState(0)

    function handleClick(event) {

        const basicDataObj = {
            jobField1: jobField1,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            mobileNumber: mobileNumber,
            gender: gender,
            socialStatus: socialStatus,
            address: address,
            country: country,
            city: city,
            postalCode: postalCode,
            nationalID: nationalID,
            careerLevel: careerLevel,
            militaryStatus: militaryStatus,
            nationality: nationality,
            expectedSalary: expectedSalary,
            currentSalary: currentSalary
        }

        console.log(basicDataObj.firstName)
        console.log(basicDataObj.middleName)
        console.log(basicDataObj.lastName)
        console.log(basicDataObj.phoneNumber)
        console.log(basicDataObj.mobileNumber)
        console.log(basicDataObj.gender)
        console.log(basicDataObj.socialStatus)
        console.log(basicDataObj.address)
        console.log(basicDataObj.country)
        console.log(basicDataObj.city)
        console.log(basicDataObj.postalCode)
        console.log(basicDataObj.nationalID)
        console.log(basicDataObj.careerLevel)
        console.log(basicDataObj.militaryStatus)
        console.log(basicDataObj.nationality)
        console.log(basicDataObj.expectedSalary)
        console.log(basicDataObj.currentSalary)
        axios.post('http://localhost:5000/basicData', basicDataObj).then((response) => {
            console.log(response)
        }).catch(err => {
            console.log(err)
            console.log('an error had occured')
        })
    }

    return (

        <body className="body">
            <div className="container" >
                <div class="content">






                    <h2>Applicant Basic Details</h2>
                    <form>
                        <div className="user-details">
                            <div className="input-box">
                                <label> Job Field 1</label>
                                <select name="jobField1" id="jf1" onChange={(e) => {
                                    setJobField1(e.target.value)
                                }}>
                                    <option value="administration">Administration</option>
                                    <option value="direct reduction">Direct Reduction</option>
                                    <option value="electrical">Electrical</option>
                                    <option value="finance">Finance</option>
                                    <option value="human resource">Human Resource</option>
                                    <option value="information technology">Information Technology</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <label> Job Field 2</label>
                                <select name="jobField2" id="jf2">
                                    <option value="administration">Administration</option>
                                    <option value="directreduction">Direct Reduction</option>
                                    <option value="electrical">Electrical</option>
                                    <option value="finance">Finance</option>
                                    <option value="humanresource">Human Resource</option>
                                    <option value="informationtechnology">Information Technology</option>
                                </select>

                            </div>
                            <div className="input-box">
                                <label>First Name</label>
                                <input
                                    onChange={(e) => setFirstName(e.target.value)}

                                />

                            </div>
                            <div className="input-box">
                                <label>Middle Name</label>
                                <input
                                    onChange={(e) => setMiddleName(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>Last Name</label>
                                <input
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label>Phone</label>
                                <input
                                    type="number"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>

                            <div className="input-box">
                                <label>Social Status</label>
                                <select name="socialstatus" id="socialstatus">
                                    <option value="Completed">Single</option>
                                    <option value="Exempted">Married</option>
                                    <option value="Exempted">Married +</option>
                                    <option value="Exempted">Widower</option>
                                    <option value="Exempted">Divorced</option>
                                </select>
                            </div>



                            <div className="input-box">
                                <label>Gender</label>
                                <select name="gender" id="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div className="input-box">
                                <label>Mobile</label>
                                <input
                                    type="number"
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                            </div>


                            <div className="input-box">
                                <label>Address</label>
                                <input
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="input-box">
                                <label>Country</label>
                                <input
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>

                            <div className="input-box">
                                <label>City</label>
                                <input
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>

                            <div className="input-box">
                                <label>Postal Code</label>
                                <input
                                    type="number"
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </div>

                            <div className="input-box">
                                <label>National ID No</label>
                                <input
                                    type="number"
                                    onChange={(e) => setNationalID(e.target.value)}
                                />
                            </div>

                            <div className="input-box">
                                <label>Current Career Level</label>
                                <select name="socialstatus" id="socialstatus">
                                    <option value="Completed">Student</option>
                                    <option value="Exempted">Entry Level</option>
                                    <option value="Exempted">Experienced (Non Manager) +</option>
                                    <option value="Exempted">Manager</option>
                                    <option value="Exempted">Senior Management</option>
                                </select>
                            </div>

                            <div className="input-box">
                                <label>Military Status</label>
                                <select name="militarystatus" id="militarystatus">
                                    <option value="Completed">Completed</option>
                                    <option value="Exempted">Exempted</option>
                                    <option value="Exempted">Temporary Exemption</option>
                                    <option value="Exempted">Not Requested</option>
                                    <option value="Exempted">Under Request</option>
                                </select>
                            </div>

                            <div className="input-box">
                                <label>Military Reasons</label>
                                <input
                                    onChange={(e) => setMilitaryReasons(e.target.value)}
                                />
                            </div>

                            <div className="input-box">
                                <label>Nationality</label>
                                <input
                                    onChange={(e) => setNationality(e.target.value)}
                                />
                            </div>

                            <div className="input-box">
                                <label>Expected Salary(L.E)</label>
                                <input
                                    type="number"
                                    onChange={(e) => setExpectedSalary(e.target.value)}
                                />
                            </div>

                            <div className="input-box">
                                <label>Current Salary(L.E)</label>
                                <input
                                    type="number"
                                    onChange={(e) => setCurrentSalary(e.target.value)}
                                />
                            </div>



                        </div>

                    </form>


                </div>
                <button className="checkButton" type="submit" onClick={handleClick}>Submit</button>

            </div>
        </body>

    );
}

export default BasicData;