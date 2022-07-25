import React, { useEffect } from 'react';
import Editor from '../../components/Draw/components/Editor';
import "./draw.css";

const Draw = () => {
  useEffect(() => {
    document.title = "Summer Holiday | Joint NFT Generation";
  })
  return (
    <div className='draw'>
        <div className='draw-container'>
            <Editor />
        </div>
    </div>
  )
}

export default Draw