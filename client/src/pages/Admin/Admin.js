import React, { useEffect, useState } from 'react';
import "./admin.css";

import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux';
import { createCanvas } from '../../actions/Canvases';

const Admin = () => {
    const dispatch = useDispatch();

    const [newCanvas, setNewCanvas] = useState({
        canvasName: "",
        width: 2,
        height: 2,
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
        // for (let i = 0; i < newCanvas.height; i++) {
        //     for (let j = 0; j < newCanvas.width; j++) {
        //         pixelArray.push({
        //             id: `${i}.${j}`,
        //             color: "#ffffff",
        //             who: "everyone"
        //         })
        //     }
        // }

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

            <button onClick={() => dispatch(createCanvas(newCanvas))}>Submit</button>
        </div>
    </div>
  )
}

export default Admin