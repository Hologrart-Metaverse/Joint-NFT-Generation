import React, { useEffect, useState } from 'react';
import "../styles/editor.scss";

import DrawingPanel from './DrawingPanel';

import { SketchPicker, HuePicker } from "react-color";
import { useSelector } from 'react-redux';

const Editor = ({ canvasPixels, canvas_id, setBuyAlert }) => {
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
      {/* {
        user.length !== 0 ? (<SketchPicker className='sketchPicker' color={selectedColor} onChange={changeColor} />) : null
      } */}
      <HuePicker className='sketchPicker' color={selectedColor} onChange={changeColor} />
      {
        // canvasPixels[1] ? <DrawingPanel className='DrawingPanel' width={canvasPixels[1].length} height={canvasPixels.length} selectedColor={selectedColor} /> : null
        canvasPixels[1] ? <DrawingPanel className='DrawingPanel' setBuyAlert={setBuyAlert} pixels={canvasPixels} canvas_id={canvas_id} selectedColor={selectedColor} /> : null
      }
        
    </div>
  )
}

export default Editor