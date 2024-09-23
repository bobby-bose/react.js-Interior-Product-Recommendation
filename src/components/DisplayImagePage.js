import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const DisplayImagePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        {/* Display your image here */}
        <img
          src="https://homezonline.in/wp-content/uploads/2022/09/Double-storey-home-with-alluring-exterior.jpg"
          alt="Image"
          style={{ width: '70%', height: '70%', display: 'block', margin: 'auto' }}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        {/* Add a button to navigate to the next page */}
        <Link to="/copy-url">
          <Button variant="contained" color="primary" style={{ width: '100%' }}>
            Copy URL
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayImagePage;
