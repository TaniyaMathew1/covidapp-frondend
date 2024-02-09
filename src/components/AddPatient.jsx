import React, { useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const AddPatient = () => {
    const [input,setInput]=new useState(
        {
            "patientName":"",
            "patientAddress":"",
            "patientPhone":"",
            "patientSymptom":"",
            "patientStatus":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/covid/patient-entry",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Sucessfully added")
                    setInput(
                        {
                            "patientName":"",
                            "patientAddress":"",
                            "patientPhone":"",
                            "patientSymptom":"",
                            "patientStatus":""
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient name</label>
                            <input type="text" className="form-control" name='patientName' value={input.patientName} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone number</label>
                            <input type="text" className="form-control" name='patientPhone' value={input.patientPhone} onChange={inputHandler} />
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name='patientAddress' value={input.patientAddress} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Symptom</label>
                            <input type="text" className="form-control" name='patientSymptom' value={input.patientSymptom} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Status</label>
                            <input type="text" className="form-control" name='patientStatus' value={input.patientStatus} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddPatient