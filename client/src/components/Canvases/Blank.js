import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./canvas.css";


const Blank = (props) => {
  const navigation = useNavigate();
  const { title, width, height, img} = props;
  return (
    <div className='canvas-blank'>
      <div className='canvas-top'>
        <div className='canvas-top-title'>
            <h5>At December 17<sup>th</sup>, 2022</h5>
            <br/>
            <br/>
          <h2 className='canvas-title'>{title}</h2>
          <p>{width} x {height}</p>
        </div>
        <div className='canvas-userCount'>
          <p className='userCount'>Instant User Count: <span>231</span></p>
          <p className='userCount'>Total User Count: <span>5231</span></p>
        </div>
      </div>
      <img className='canvas-image' src={img} />
    </div>
  )
}

export default Blank