import React from 'react';
import "../styles/row.scss";
import Pixel from './Pixel';

const Row = (props) => {
    const { rowNumber, rowPixels, canvas_id, selectedColor } = props;

    let pixels = [];
    for (let i = 0; i < rowPixels.length; i++) {
      console.log(rowPixels[i].color);
      pixels.push(<Pixel key={i} columnNumber={i} color={rowPixels[i].color} whose={rowPixels.who} canvas_id={canvas_id} rowNumber={rowNumber} selectedColor={selectedColor} />);
    }

  return (
    <div className='row'>
        {pixels}
    </div>
  )
}

export default Row