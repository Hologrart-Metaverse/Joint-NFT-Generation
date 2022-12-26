import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchCanvasPixels, refreshCanvas, updateCanvas } from '../../actions/Canvas';
// components
import Editor from '../../components/Draw/components/Editor';
import PixelBuy from '../../components/Draw/components/PixelBuy';
// styling
import { buttonUnstyledClasses } from '@mui/base';
import "./draw.css";

const Draw = () => {
  const canvasPixels = useSelector(state => state.canvas_pixels);

  const dispatch = useDispatch();
  const location = useLocation();

  const canvas_id = location.search.split("=")[1];

  const [buyAlert, setBuyAlert] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    document.title =
      `${location.pathname.split("/")[2]?.replaceAll("%20", " ")} | Joint NFT Generation`;

    dispatch(fetchCanvasPixels(canvas_id));

    // setInterval(() => {
    //   var x = 0;
    //   if (x < 1) {
    //     dispatch(refreshCanvas(canvas_id));
    //     console.log("hekko");
    //     x += 1;
    //   }
    // }, 5000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [canvas_id, dispatch, location.pathname]);

  useEffect(() => {
    let buy = document.querySelector(".pixel-sale");

    if (buyAlert) {
      buy.style.display = "flex";
      buy.style.transform = `translate(${mouseX + 30}px, ${mouseY + 30}px)`;
      // buy.style.transform = `translateY(${mouseY}px)`;
    } else {
      buy.style.display = "none";
    }
  }, [buyAlert, mouseX, mouseY]);

  return (
    <div className='draw'>
      <div className='draw-container'>
        {canvasPixels && (
          <Editor
            canvasPixels={canvasPixels}
            canvas_id={canvas_id}
            setBuyAlert={setBuyAlert} />
        )}
      </div>
      <PixelBuy />
    </div>
  );
};

export default Draw;