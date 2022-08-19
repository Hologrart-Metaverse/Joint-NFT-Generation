import React, { useState, useEffect } from 'react';
import FileBase from "react-file-base64";

import * as api from "../api";

import "./createCanvas.css";

const CreateCanvas = () => {

    const [newCanvas, setNewCanvas] = useState({
        canvasName: "",
        width: 32,
        height: 32,
        image: "",
        pixels: []
    });

    useEffect(() => {
        var pixelArray = [];

        for (let i = 0; i < newCanvas.height; i++) {
            var rowArray = [];
            for (let j = 0; j < newCanvas.width; j++) {
                rowArray.push({
                    id: `${i}.${j}`,
                    color: "#ffffff",
                    who: "everyone"
                })
            }
            pixelArray.push(rowArray);
        }

        console.log(pixelArray);

        setNewCanvas({ ...newCanvas, pixels: pixelArray });
    }, [newCanvas.width | newCanvas.height]);


  return (
    <div className='form'>
        <div className='form-content'>
            <input type="text" placeholder='Canvas Name' value={newCanvas.canvasName} onChange={e => setNewCanvas({ ...newCanvas, canvasName: e.target.value })} />
            <input type="number" placeholder='Width' value={newCanvas.width} onChange={e => setNewCanvas({ ...newCanvas, width: e.target.value })} />
            <input type="number" placeholder='Height' value={newCanvas.height} onChange={e => setNewCanvas({ ...newCanvas, height: e.target.value })} />
            <FileBase 
              type="file"
              multiple={false}
              onDone={({base64}) => setNewCanvas({ ...newCanvas, image: base64 })}
            />

            <button onClick={() => api.createCanvas(newCanvas)}>Submit</button>
        </div>
    </div>
  )
}

export default CreateCanvas