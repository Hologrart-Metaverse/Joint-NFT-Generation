import React, { useEffect, useState } from 'react';
import "./register.css";

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/Users';
import { useSelector } from 'react-redux';

const Register = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();
   const [newUser, setNewUser] = useState({
        fullName: "",
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
      if (user.length !== 0) {
        navigation("/");
      }
    }, [user]);
  return (
    <div className='register'>
        <div className='container register-content'>
            <h1>Register</h1>

            <div className='register-inputs'>
                <TextField sx={{ m: "20px 0", width: '100%' }} className='name-input' fullWidth label="Wallet Address"  />
                <TextField sx={{ m: "20px 0", width: '100%' }} className='name-input' fullWidth label="Full Name" value={newUser.fullName} onChange={e => setNewUser({...newUser, fullName: e.target.value})} />
                <TextField className='email-input' fullWidth label="Email" value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} />
                <FormControl className='password-input' sx={{ m: "20px 0", width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    value={newUser.password}
                    onChange={e => setNewUser({...newUser, password: e.target.value})}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={e => e.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
            </div>

            <div className='register-buttons'>
              <button onClick={() => {
                dispatch(createUser(newUser))
              }}>Register</button>
              <div className='register-buttons-bottom'>
                <p>Forget your password? <Link to="/forget-my-password">Forget My Password</Link></p>
                <p>Already have an account? <Link to="/">Login</Link></p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Register