import React from 'react';
import "./profile.css";

import me from "../../assets/temp/TUBB9695.JPG";

const Profile = () => {
  return (
    <div className='profile'>
        <img className='profile-img' src={me}></img>
        <h1 className='profile-name'>Doğukan Topçu</h1>
    </div>
  )
}

export default Profile