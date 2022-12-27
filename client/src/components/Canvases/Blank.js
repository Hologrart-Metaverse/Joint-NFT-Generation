import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./canvas.css";

const Blank = ({ title, width, height, img }) => {
  const navigation = useNavigate();

  const redirect = 'draw/The Scream?id=630f6e9b0bb1c82791e27077'; // buraya ayrı script linki gelecek

  const handleCanvasClick = () => {
    navigation(`/draw/SahneXL?id=63aaa545acd460164adff240`);
  };

  return (
    <div onClick={handleCanvasClick} className='canvas-blank'>
      <div className='canvas-top'>
        <div className='canvas-top-title'>
          <h5>At December 27<sup>th</sup>, 2022</h5>
          {/* <br /> */}
          <br />
          <h2 className='canvas-title'>{title}</h2>
          <p>{width} x {height}</p>
        </div>
        {/* <div className='canvas-userCount'>
          <p className='userCount'>Instant User Count: <span>x</span></p>
          <p className='userCount'>Total User Count: <span>x</span></p>
        </div> */}
      </div>
      <img className='canvas-image' src={img} />
    </div>
  );
};

export default Blank;