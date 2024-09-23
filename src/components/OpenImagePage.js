// OpenImagePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const OpenImagePage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Link to="/display-image">
        <Button variant="contained" color="primary" style={{ width: '100%' }}>
          Open Image
        </Button>
      </Link>
    </div>
  );
};

export default OpenImagePage;
