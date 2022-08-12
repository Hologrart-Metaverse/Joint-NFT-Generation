import React from 'react';
import "../styles/drawingPanel.scss";
import Row from './Row';

const DrawingPanel = (props) => {
    const { pixels, canvas_id, selectedColor } = props;



    let rows = [];
    for (let i = 0; i < pixels.length; i++) {
      rows.push(<Row key={i} rowNumber={i} rowPixels={pixels[i]} canvas_id={canvas_id} selectedColor={selectedColor} />)
    }

  return (
    <div id='drawingPanel'>
        <div id='pixels'>
            {rows}
        </div>
    </div>
  )
}

export default DrawingPanel