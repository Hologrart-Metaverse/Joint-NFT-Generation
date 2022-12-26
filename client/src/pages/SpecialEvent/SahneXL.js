import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCanvasPixels, refreshCanvas, updateCanvas } from '../../actions/Canvas';
import Editor from '../../components/Draw/components/Editor';


import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const SahneXL = () => {
    const canvasPixels = useSelector(state => state.canvas_pixels);
    const dispatch = useDispatch();
  return (
    <div className='sahne'>
        <div className='draw'>
      <div className='draw-container'>
        {canvasPixels && (
          <Editor
            canvasPixels={32}
            canvas_id={32} />
        )}
      </div>
      {/* <PixelBuy /> */}
    </div>
    </div>
  )
}

export default SahneXL