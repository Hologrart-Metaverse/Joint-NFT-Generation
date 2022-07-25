import {React, useEffect} from 'react';
import "./home.css";

import Canvas from '../../components/Canvases/Canvas';
import Profile from '../../components/Profile/Profile';

import summerHoliday from "../../assets/temp/laura-adai-7JkdJPA9kS0-unsplash.jpg";
import birthday from "../../assets/temp/adi-goldstein-Hli3R6LKibo-unsplash.jpg";
import concert from "../../assets/temp/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg";
import metaverse from "../../assets/temp/uk-black-tech-dLLQNd7RP28-unsplash.jpg";
import blockchain from "../../assets/temp/shubham-dhage-JlijbOtSWuw-unsplash.jpg";
import july from "../../assets/temp/luke-michael-Tdwu35bCUj0-unsplash.jpg";
import october from "../../assets/temp/ahmet-demiroglu-EB-FA7xzwps-unsplash.jpg";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Hologrart Metaverse";
  }, []);
  return (
    <div style={{color: "white"}}>
      <div className='container'>
        <div className='home-content'>
          <div className='canvases'>
            <Canvas title="Summer Holiday" width="32" height="32" img={summerHoliday} />
            <Canvas title="Birthday" width="32" height="16" img={birthday} />
            <Canvas title="Concert" width="64" height="64" img={concert} />
            <Canvas title="Metaverse" width="32" height="32" img={metaverse} />
            <Canvas title="Blockchain" width="64" height="32" img={blockchain} />
            <Canvas title="4th July" width="64" height="32" img={july} />
            <Canvas title="29th October" width="64" height="32" img={october} />
          </div>
          <div className='userProfile'>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home