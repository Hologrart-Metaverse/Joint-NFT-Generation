import React from 'react';
import "../styles/row.scss";
import Pixel from './Pixel';

const Row = (props) => {
    const { rowPixels, selectedColor } = props;

    let pixels = [];
    for (let i = 0; i < rowPixels.length; i++) {
      console.log(rowPixels[i].color);
      pixels.push(<Pixel key={rowPixels[i].id} color={rowPixels[i].color} whose={rowPixels.who} selectedColor={selectedColor} />);
    }

  return (
    <div className='row'>
        {pixels}
    </div>
  )
}

export default Row