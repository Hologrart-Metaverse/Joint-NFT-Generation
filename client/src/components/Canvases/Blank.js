import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./canvas.css";


const Blank = (props) => {
  const navigation = useNavigate();
  const { title, width, height, img} = props;
  return (
    <div onClick={() => navigation(`/draw/${title}?width=${width}&height=${height}`)} className='canvas-blank'>
      <div className='canvas-top'>
        <div className='canvas-top-title'>
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
      <div className='canvas-dates'>
        <p className='start-date'>Starting At: <span>16 May 2022</span></p>
        <p className='start-date'>Deadline: <span>16 August 2022</span></p>
      </div>
      <img className='canvas-image' src={img} />
    </div>
  )
}

export default Blank