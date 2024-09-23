import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link
import Animations from './animation'; // Assuming this is the correct path to your Animations component
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook

const Home = () => {
  const navigate = useNavigate(); // Initializing useNavigate hook

  const handleUploadData = () => {
    navigate('/openimagepage'); // Navigate to the next page
  };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <div className="welcome-section" style={{ border: '6px solid white', color: 'white', margin: '20px' }}>
        <h1>Welcome to Our Project</h1>
        {/* <Animations /> Assuming Animations is implemented correctly */}
      </div>
      <div className="about-section" style={{ border: '6px solid white', color: 'white', margin: '20px' }}>
        <h2>About Our Project</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tortor sit amet diam dapibus, nec laoreet tortor tempus. Ut nec ipsum eu purus maximus cursus.</p>
        <p>Integer dapibus, velit at varius scelerisque, sapien turpis placerat velit, sit amet eleifend dolor velit ut ante. Nulla eget vestibulum orci, et dapibus justo. Duis eu tortor in justo feugiat gravida.</p>
        <p>Curabitur sit amet felis non odio condimentum maximus nec ac leo. Sed faucibus, velit sit amet convallis consequat, arcu nisl rutrum sapien, ac viverra magna metus ac enim. Aliquam erat volutpat.</p>
      </div>
      <div className="text-center" style={{ marginTop: '20px' }}>
        {/* Use onClick to call handleUploadData when button is clicked */}
        <button className="btn btn-primary" style={{ background: 'linear-gradient(to right, #363636, #5a5a5a)', color: 'white', width: '40%', height: '2em' }} onClick={handleUploadData}>Upload Data</button>
      </div>
    </div>
  );
};

export default Home;
