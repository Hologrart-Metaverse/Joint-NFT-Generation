import React, { useEffect, useState } from 'react';
import "../styles/editor.scss";

import DrawingPanel from './DrawingPanel';

import { SketchPicker } from "react-color";
import { useSelector } from 'react-redux';

const Editor = ({ canvasPixels }) => {
    const user = useSelector((state) => state.user);
    useEffect(() => {
      if (user.length !== 0) {
        setSelectedColor("#ffffff");
      }
      else(
        setSelectedColor("none")
      )
    }, [user]);



    const [selectedColor, setSelectedColor] = useState("none");

    const changeColor = (color) => {
        setSelectedColor(color.hex);
    }

    
  return (
    <div className='drawEditor'>
      {
        user.length !== 0 ? (<SketchPicker className='sketchPicker' color={selectedColor} onChange={changeColor} />) : null
      }
      {
        // canvasPixels[1] ? <DrawingPanel className='DrawingPanel' width={canvasPixels[1].length} height={canvasPixels.length} selectedColor={selectedColor} /> : null
        canvasPixels[1] ? <DrawingPanel className='DrawingPanel' pixels={canvasPixels} selectedColor={selectedColor} /> : null
      }
        
    </div>
  )
}

export default Editor