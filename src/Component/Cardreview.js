import React from "react";
import tryimg from "../Photo/968eb8e0a692089a6faaf2e566d28d6d.jpg";
import "../Style/Cardreview.css";

function Cardreview({revi_img}) {
  return (
    <div className='card-root'>
      <div className='card-img-cnt'><img className='card-img' alt='img' src={tryimg}/></div>
      <div className='card-body-card'>
        <p>Your assessment method is so good & patient support resolves issues promptly</p>
        <div>Dr.Arun Kumar</div>
        <p> <span>6.6, Bussiness Owner</span>   <span><img alt="rating" src={revi_img}/></span></p>
      </div>
      
    </div>
  )
}

export default Cardreview