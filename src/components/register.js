import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    };

    return (
        <div style={{ 
            background: 'linear-gradient(to bottom right, #bbb, #d9823b)',
            height: '70vh', /* Ensure the gradient covers the entire viewport */
            display: 'flex', /* Enable flexbox for centering content */
            flexDirection: 'column', /* Arrange content from top to bottom */
            justifyContent: 'center', /* Center content horizontally */
            alignItems: 'center', /* Center content vertically */
            margin: '200px 0', /* Add margin to top and bottom */
            borderRadius: '20px', /* Add border radius */
            border: '10px solid red', /* Add border */
        }}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{ textAlign: 'center' }}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        style={{ margin: '10px' }}
                    />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        style={{ margin: '10px' }}
                    />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        style={{ margin: '10px' }}
                    />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <TextField
                        label="Password"
                        variant="outlined"
                        style={{ margin: '10px' }}
                    />
                </div>
                
            </div>
            {/* More TextField components for E-mail, Phone Number, Password, etc. */}
            
            <Button variant="contained" color="secondary" style={{ margin: '10px',width:'70%' }} onClick={handleClick}>
                Register
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
    );
};

export default Register;
