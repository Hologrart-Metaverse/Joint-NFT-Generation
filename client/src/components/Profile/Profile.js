import React from 'react';
import "./profile.css";

import { useNavigate } from "react-router-dom";

import LogoutIcon from '@mui/icons-material/Logout';

import me from "../../assets/temp/TUBB9695.JPG";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/Users';

const Profile = () => {
  const navigation = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className='profile'>
        <img className='profile-img' src={me}></img>
        <h1 className='profile-name'>{user.fullName}</h1>

        <div className='profile-links'>Total Pixel: 123</div>
        <div className='profile-links'>Total profit: $67</div>
        <div onClick={() => navigation("/shop")} className='profile-links profile-links-buttons'>Shop</div>
        <div onClick={() => navigation("/my-draws")} className='profile-links profile-links-buttons'>My Draws</div>
        <div onClick={() => dispatch(logout())} className='profile-links profile-links-buttons'><LogoutIcon /> Logout</div>
    </div>
  )
}

export default Profile