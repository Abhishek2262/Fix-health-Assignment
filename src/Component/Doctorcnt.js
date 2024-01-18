import React from 'react';
import "../Style/Doctorcnt.css";
import tryimg from "../Photo/doctor.jpg";

function Doctorcnt() {
  return (
    <div className='dct-root'>
      <div className='dct-img-cnt'><img className='dct-img' alt='img' src={tryimg}/></div>
      <div className='dct-body-card'>
        <div>Dr. Amit Kumar</div>
        <div>MMBS</div>
        <div>5yrs</div>
      </div>
      <div className='dct-btn-div'><button className='dct-btn'>View</button></div>
    </div>
  )
}

export default Doctorcnt