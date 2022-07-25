import React, { useState } from 'react';
import "../styles/editor.scss";

import DrawingPanel from './DrawingPanel';

import { SketchPicker } from "react-color";
import { useLocation, useParams } from 'react-router-dom';

const Editor = () => {
    const params = useParams();
    console.log(params);

    const location = useLocation();
    var width = location.search.split("&")[0].split("=")[1]
    var height = location.search.split("&")[1].split("=")[1]

    const [selectedColor, setSelectedColor] = useState("#ffffff");
    const [canvasWidth, setCanvasWidth] = useState(width);
    const [canvasHeight, setCanvasHeight] = useState(height);

    const changeColor = (color) => {
        setSelectedColor(color.hex);
    }
  return (
    <div className='drawEditor'>
        <SketchPicker className='sketchPicker' color={selectedColor} onChange={changeColor} />
        <DrawingPanel className='DrawingPanel' width={canvasWidth} height={canvasHeight} selectedColor={selectedColor} />
    </div>
  )
}

export default Editor