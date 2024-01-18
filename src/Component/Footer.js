import React from 'react';
import "../Style/Footer.css";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import ImgLogo from "../Photo/logo_with_yp_black_urUeyjKwY.svg";



function Footer() {
     const handleClick = () => {
       window.scrollTo({
           top:0,
           behavior:"smooth"
       });
   }
  return (
    <div className='footer-root'>
        <div><button className='top-btn' onClick={handleClick}>Back to Top</button></div>
        <div className='footer-body'>
            <div><img className='footer-logo' alt='Logo' src={ImgLogo}/></div>
            <div>
                <div>Product</div>
                <div>Blogs</div>
                <div>Privacy Policy</div>
                <div>Terms & Conditions</div>
            </div>
            <div>
                <div>Company</div>
                <div>About Us</div>
                <div>Careers</div>
                <div>Contact</div>
            </div>
            <div>
                <div>Services</div>
                <div>Knee Pain</div>
                <div>Neck Pain</div>
                <div>Back Pain</div>
                <div>Shoulder Pain</div>
                <div>Ankle and Foot Pain</div>
                <div>All Services</div>
            </div>
            <div>
                <div>Conditions</div>
                <div>Spondylosis</div>
                <div>ACL Tear</div>
                <div>Achilles Tendonitis</div>
                <div>Plantar Fasciitis</div>
                <div>All Conditions</div>
            </div>
        
        </div>
        <div className='socialmedia-cnt'> 
            <SiFacebook/>
            <SiInstagram/>
            <SiLinkedin/>
            <SiYoutube/>
            <SiTwitter/>


        </div>
    </div>
  )
}

export default Footer