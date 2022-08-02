import React, { useState } from 'react';
import "./login.css";

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Login = () => {
   const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='login'>
        <div className='container login-content'>
            <h1>Login</h1>

            <div className='login-inputs'>
                <TextField className='email-input' fullWidth label="Email" value={userLogin.email} onChange={e => setUserLogin({...userLogin, email: e.target.value})} />
                <FormControl className='password-input' sx={{ m: "20px 0", width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    value={userLogin.password}
                    onChange={e => setUserLogin({...userLogin, password: e.target.value})}
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

            <div className='login-buttons'>
              <button>Login</button>
              <div className='login-buttons-bottom'>
                <p>Forget your password? <Link to="/forget-my-password">Forget My Password</Link></p>
                <p>Don't you have an account yet? <Link to="/register">Register</Link></p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login