import React from 'react';
import { TextField, IconButton, Button } from '@material-ui/core';
import { FileCopy as FileCopyIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom'; // Import Link for navigation

const CopyUrlPage = () => {
  const imageUrl = "https://homezonline.in/wp-content/uploads/2022/09/Double-storey-home-with-alluring-exterior.jpg";

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(imageUrl);
    alert('URL Copied!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <TextField
        style={{ width: '200%', backgroundColor: 'white', borderRadius: '10px', padding: '10px' }}
        value={imageUrl}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleCopyUrl}>
              <FileCopyIcon />
            </IconButton>
          ),
        }}
      />
      {/* Button with recommended product link */}
      <div style={{ marginTop: '10px' }}>
        <Link to="/product-recommendation">
          <Button
            variant="outlined"
            style={{
              margin: '10px',
              border: '2px solid white',
              background: 'linear-gradient(to right, #363636, #5a5a5a)',
              color: 'white',
              borderRadius: '10px',
              padding: '10px 20px', // Adjust padding as needed
            }}
          >
            Recommend Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CopyUrlPage;
