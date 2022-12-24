import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./canvas.css";

const Canvas = ({ canvas }) => {
  const navigation = useNavigate();

  const handleCanvasClick = () => {
    // navigation(`/draw/${canvas.canvasName}?width=${canvas.width}&height=${canvas.height}`)
    navigation(`/draw/${canvas.canvasName}?id=${canvas._id}`);
    // window.location.reload();
  };

  return (
    <div onClick={handleCanvasClick} className='canvas'>
      <div className='canvas-top'>
        <div className='canvas-top-title'>
          <p>About:</p>
          <h2 className='canvas-title'>{canvas.canvasName}</h2>
          <p>{canvas.width} x {canvas.height}</p>
        </div>
        <div className='canvas-userCount'>
          <p className='userCount'>Instant User Count: <span>{canvas.instantUserCount}</span></p>
          <p className='userCount'>Total User Count: <span>{canvas.totalUserCount}</span></p>
        </div>
      </div>
      <div className='canvas-dates'>
        <p className='start-date'>Starting At: <span>{canvas.createdAt}</span></p>
        <p className='start-date'>Deadline: <span>{canvas.deadline}</span></p>
      </div>
      <img className='canvas-image' src={canvas.image} />
    </div>
  );
};

export default Canvas;