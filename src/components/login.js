// Login Page
// Username
// Password
// Login Button
// material ui with responsive and center aligned with the background color of whitish grey and red color for the button
// also the input fields should verify if the entered values are in string and have no numbers and the password should be hidden with atsteriks and also if the username has any special characetris then give a 
// error message saying that the username should not have any special characters
// the login button should be disabled if the username and password are not entered the btitle should be a login page with the background color of white and the button color of red
// there should also be forgot password small button and Already have an account? Login
// add custom css styling to the login page
// add a a small div around the loign part only with background color of pinkish linear gradient color
// add a margin of 20px to the top and bottom of the div
// the div should be in the exact center of the page

import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{ 
        background: 'linear-gradient(to bottom right, #f7d9c4, #f7d9c4)', /* pinkish */
        height: '50vh', /* Ensure the gradient covers the entire viewport */
        display: 'flex', /* Enable flexbox for centering content */
        justifyContent: 'center', /* Center content horizontally */
        alignItems: 'center', /* Center content vertically */
        margin: '200px 0', /* Add margin to top and bottom */
        borderRadius: '20px', /* Add border radius */
        border: '10px solid red', /* Add border */
        }}>
        <div style={{ textAlign: 'center' }}>
            <TextField
            label="Username"
            variant="outlined"
            style={{ margin: '10px' }}
            />
            <TextField
            label="Password"
            variant="outlined"
            type="password"
            style={{ margin: '10px' }}
            />
            <Button variant="contained" color="secondary" style={{ margin: '10px' }}>
            Login
            </Button>
            <div>
            <Link to="/forgot-password">
                <Button variant="text" style={{ margin: '10px',borderRadius: '20px',border: '10px solid blue' }}>
                Forgot Password
                </Button>
            </Link>
            </div>
            <div>
            <Link to="/login">
            <Button variant="text" style={{ margin: '10px',borderRadius: '20px',border: '10px solid blue' }}>
                Already have an account? Login
                </Button>
            </Link>
            </div>
        </div>
        </div>
    );
    };

export default Login;

