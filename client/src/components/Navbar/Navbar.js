import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./navbar.css";

import BoltIcon from '@mui/icons-material/Bolt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import me from "../../assets/temp/TUBB9695.JPG";

import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='navbar'>
      <div className='navbar_left'>
        <Link className='navbar_left' to="/">Joint NFT Generation</Link>
      </div>
      {
        user.length !== 0 ? (
          <div className='links'>
            
              <Link className='navbar_link' to="/">Home</Link>
              <Link className='navbar_link' to="/shop">Shop</Link>
              <Link className='navbar_link' to="/my-draws">My Draws</Link>
              <a onClick={() => setIsOpen(!isOpen)} style={{display: "flex", alignItems: "center"}} className='navbar_link'>Products <ArrowDropDownIcon/></a>
              <img onClick={() => navigation("./profile")} className='navbar_link navbar-profile' src={me} />

            
            <button onClick={() => navigation("./donation")} className='navbar_right_button'><BoltIcon style={{fontSize:"13px", marginBottom:"-1px"}}/> DONATE</button>
          </div>
        ) 
        : (
          <div className='links'>
            
              <Link className='navbar_link' to="/login">Login</Link>
              <Link className='navbar_link' to="/register">Register</Link>
              <a onClick={() => setIsOpen(!isOpen)} style={{display: "flex", alignItems: "center"}} className='navbar_link'>Products <ArrowDropDownIcon/></a>
            
            <button onClick={() => navigation("./donation")} className='navbar_right_button'><BoltIcon style={{fontSize:"13px", marginBottom:"-1px"}}/> DONATE</button>
          </div>
        )
      }

      {
        isOpen ? (
          <div className='navbar-dropdown'>
            <div className='navbar-dropdown-one'>
              <h4>Culture and Art</h4>
              <div className='navbar-products'>Joint NFT Generation</div>
              <div className='navbar-products'>NFT Exhibition</div>
              <div className='navbar-products'>Mythological Event Universes</div>
              <div className='navbar-products'>NFT Generation with AI</div>
            </div>
            <div className='navbar-dropdown-two'>
              <h4>Business Development</h4>
              <div className='navbar-products'>Mobility</div>
              <div className='navbar-products'>Clean Energy</div>
              <div className='navbar-products'>Aviation</div>
            </div>
            <div className='navbar-dropdown-three'>
              <h4>Financial Management Solutions</h4>
              <div className='navbar-products'>B2B Solutions</div>
            </div>
          </div>
        )
        : null
      }

      
    </div>
  )
}

export default Navbar