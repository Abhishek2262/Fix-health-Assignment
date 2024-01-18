import React, { useState } from "react";
import {doctors} from "../Data/Doctordata";

import "../Style/Form.css";

const Form = () => {
  const [step, setStep] = useState(1);
  const [ageverify, setAgeverify] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phn: "",
    age: "",
    city: "",
    company: "",
    physioexp: false,
    physiosum: "",
    doctor:"",
  });

  const nextStep = () => {
    setStep(step + 1);
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="form-cnt">
        <form onSubmit={handleSubmit} className="form-body">
          {step === 1 && (
            <div className="form-in">
              <div>
                <h2 className="heading-form-in">Book a FREE Appointment</h2>
                <p>60+ Expert Physiotherapists for 200+ Conditions</p>
              </div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <br />
              <label>Phone Number</label>
              <input
                type="number"
                name="phn"
                value={formData.phn}
                onChange={handleChange}
              />
              <br />
              <button className="form-btn" type="button" onClick={nextStep}>
                Start Your Recovery
              </button>
            </div>
          )}
          {step === 2 && (
            <div>
             
              <h1 className="form-step2-heading"> Contact Information</h1>

              <label>Age </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <br />
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              <br />
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              <br />

              <button className="form-btn" type="button" onClick={()=>{
                nextStep()
                setAgeverify(formData.age <= 40 ? true:false)
              }} >
                Submit
              </button>
              {/* type="submit" */}
            </div>
          )}
          {step === 3 && (
            <div className="parent-step3">
            

              <h2>Chief complaints</h2>
              <label>Complain</label>
              <textarea rows={13} />
              <button className="form-btn" type="button" onClick={()=>{
                setStep(ageverify ? 5:4)
              }}>
                Submit
              </button>
            </div>
          )}
          {step === 4 && (
            <div className="parent-step4">
              <label>
                {" "}
                <input
                  type="checkbox"
                  name="physioexp"
                  value={formData.physioexp}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      physioexp: !formData.physioexp,
                    })
                  }
                />{" "}
                Any Previous Experience with Phisyotherapy
              </label>
              {formData.physioexp && <textarea name="physiosum" onChange={handleChange} rows={13} />}
              <button id="physio-btn" className="form-btn" type="button" onClick={nextStep}>
                Submit
              </button>
            </div>
          )}
          {step === 5 && (
            <div>
              <label>Available Doctors</label>
              <select  name="doctor" onChange={handleChange}>
                {
                  doctors.filter(doctor=>doctor.city === formData.city).map(doctor => (
                    <option>{doctor.name}</option>
                  ))
                }
              </select>
               <button id="available-btn" className="form-btn" type="submit" >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
