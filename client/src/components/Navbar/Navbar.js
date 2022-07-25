import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./navbar.css";

import BoltIcon from '@mui/icons-material/Bolt';
import me from "../../assets/temp/TUBB9695.JPG";

const Navbar = () => {
  const navigation = useNavigate();
  return (
    <div className='navbar'>
      <div className='navbar_left'>
        <Link className='navbar_left' to="/">Joint NFT Generation</Link>
      </div>
      <div className='links'>
        
          <Link className='navbar_link' to="/">Home</Link>
          <Link className='navbar_link' to="/shop">Shop</Link>
          <Link className='navbar_link' to="/my-draws">My Draws</Link>
          <img onClick={() => navigation("./profile")} className='navbar_link navbar-profile' src={me} />

        
        <button onClick={() => navigation("./donation")} className='navbar_right_button'><BoltIcon style={{fontSize:"13px", marginBottom:"-1px"}}/> DONATE</button>
      </div>
      {/* <div className='navbar_right'>
        <Button className='navbar_right_buttona' variant='contained' size='small'>Donate</Button>
        <button className='navbar_right_button'><BoltIcon style={{fontSize:"13px", marginBottom:"-1px"}}/> DONATE</button>
      </div> */}
    </div>
  )
}

export default Navbar