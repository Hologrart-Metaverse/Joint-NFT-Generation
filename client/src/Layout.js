import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import img from "./assets/gradienta-7E5kq_sW0Ew-unsplash.jpg";

const Layout = () => {

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='body'>
      <img style={{transform: `translateY(${-offsetY * 0.5}px)`}} className='backgroundImage' src={img}/>
        <Navbar/>
        <div className='outlet'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout