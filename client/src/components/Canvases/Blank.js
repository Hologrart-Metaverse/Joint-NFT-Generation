import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./canvas.css";

const Blank = ({ title, width, height, img }) => {
  const navigation = useNavigate();

  const redirect = 'https://...'; // buraya ayrı script linki gelecek

  return (
    <div className='canvas-blank'>
      <div className='canvas-top'>
        <div className='canvas-top-title'>
          <h5>At December 17<sup>th</sup>, 2022</h5>
          <br />
          <br />
          <h2 className='canvas-title'>{title}</h2>
          <p>{width} x {height}</p>
        </div>
        <div className='canvas-userCount'>
          <p className='userCount'>Instant User Count: <span>231</span></p>
          <p className='userCount'>Total User Count: <span>5231</span></p>
        </div>
      </div>
      <a href={redirect} target='_blank' rel="noreferrer">
        <img className='canvas-image' src={img} />
      </a>
    </div>
  );
};

export default Blank;