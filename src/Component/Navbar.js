import React from 'react'
import Logo from "../Photo/logo_with_yp_black_urUeyjKwY.svg";
import "../Style/Navbar.css";
const Navbar = () => {
  return (
    <div className='nav-root'>
        <div className='logo-box' ><img style={{width:"50%"}} src={Logo} alt='Logo'/></div>
        <div className='nav-ele'>
            <div>Home</div>
            <div>Services</div>
            <div>Blog</div>
            <div>About</div>
            <div><button  className='nav-btn'>Book Now</button></div>
        </div>    
    </div>
  )
}

export default Navbar