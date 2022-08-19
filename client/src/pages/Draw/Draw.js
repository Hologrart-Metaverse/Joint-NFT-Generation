import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCanvasPixels, updateCanvas } from '../../actions/Canvas';
import Editor from '../../components/Draw/components/Editor';
import "./draw.css";

const Draw = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const canvas_id = location.search.split("=")[1];
  
  useEffect(() => {
    document.title = `${location.pathname.split("/")[2].replaceAll("%20", " ")} | Joint NFT Generation`;
    dispatch(fetchCanvasPixels(canvas_id));
    
    
  }, []);

  let canvasPixels = useSelector((state) => state.canvas_pixels);

  return (
    <div className='draw'>
        <div className='draw-container'>
          {
            canvasPixels ? <Editor canvasPixels={canvasPixels} canvas_id={canvas_id} /> : null
          }
            
        </div>
    </div>
  )
}

export default Draw