import {React, useEffect} from 'react';
import "./home.css";

import Canvas from '../../components/Canvases/Canvas';
import Profile from '../../components/Profile/Profile';


import sahne from "../../assets/pxArt-mini.png";

import { useDispatch, useSelector } from 'react-redux';
import Blank from '../../components/Canvases/Blank';
import { getCanvases } from '../../actions/Canvases';

const Home = () => {

  const user = useSelector((state) => state.user);
  const canvases = useSelector((state) => state.canvases);
  const dispatch = useDispatch();


  console.log(canvases);

  useEffect(() => {
    document.title = "Home | Hologrart Metaverse";
    dispatch(getCanvases());
  }, []);
  
  return (
    <div style={{color: "white"}}>
      <div className='container'>
        <div className='home-content'>
          <div className='canvases'>
            {
              canvases.map((canvas, index) => {
                return <Canvas key={canvas._id} canvas={canvas} />
              })
            }
            
          </div>
          <div className='userProfile'>
            {
              user.length !== 0 ? (<Profile className="profile" />) : null
            }
            <Blank title="Sahne XL Event" width="64" height="64" img={sahne} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home