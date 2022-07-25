import React from 'react';
import "./constructor.css";

import img from "../../assets/under-construction.png";

const Constructor = () => {
  return (
    <div className='constructor'>
        <div className='container'>
            <h1>It is Constructor</h1>
            <img className='constructor-img' src={img}></img>
        </div>
    </div>
  )
}

export default Constructor