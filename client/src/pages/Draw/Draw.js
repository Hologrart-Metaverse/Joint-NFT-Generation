import { buttonUnstyledClasses } from '@mui/base';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCanvasPixels, refreshCanvas, updateCanvas } from '../../actions/Canvas';
import Editor from '../../components/Draw/components/Editor';
import PixelBuy from '../../components/Draw/components/PixelBuy';
import "./draw.css";

const Draw = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const canvas_id = location.search.split("=")[1];

  const [buyAlert, setBuyAlert] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  
  useEffect(() => {
    document.title = `${location.pathname.split("/")[2].replaceAll("%20", " ")} | Joint NFT Generation`;
    dispatch(fetchCanvasPixels(canvas_id));
    // setInterval(() => {
    //   var x = 0;
    //   if (x < 1) {
    //     dispatch(refreshCanvas(canvas_id));
    //     console.log("hekko");
    //     x += 1;
    //   }
    // }, 5000);
  }, []);


  window.addEventListener("mousemove", (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  });
  useEffect(() => {
    let buy = document.querySelector(".pixel-sale")
    if (buyAlert) {
      buy.style.display = "flex";
      buy.style.transform = `translate(${mouseX + 30}px, ${mouseY + 30}px)`;
      // buy.style.transform = `translateY(${mouseY}px)`;
    }
    else {
      buy.style.display = "none";
    }

    console.log(window.mouseX);
  })


  let canvasPixels = useSelector((state) => state.canvas_pixels);

  return (
    <div className='draw'>
        <div className='draw-container'>
          {
            canvasPixels ? <Editor canvasPixels={canvasPixels} canvas_id={canvas_id} setBuyAlert={setBuyAlert} /> : null
          }
            
        </div>
        <PixelBuy />
    </div>
  )
}

export default Draw