import React from 'react';
import "../styles/drawingPanel.scss";
import Row from './Row';

const DrawingPanel = (props) => {
    const { pixels, selectedColor } = props;



    let rows = [];
    for (let i = 0; i < pixels.length; i++) {
      rows.push(<Row key={i} rowPixels={pixels[i]} selectedColor={selectedColor} />)
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