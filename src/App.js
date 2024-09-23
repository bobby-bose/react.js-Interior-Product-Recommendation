import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OpenImagePage from './components/OpenImagePage';
import DisplayImagePage from './components/DisplayImagePage';
import CopyUrlPage from './components/CopyUrlPage';
import ProductRecommendationPage from './components/ProductRecommendationpage';
import CheckoutPage from './components/CheckoutPage';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import DesignPage from './components/design';

function App() {
  return (
    <Router>
      <div style={{ 
        background: 'linear-gradient(to bottom right, #1a4e91, #178b75, #aa6c39)', /* Dark blue, green, brownish */
        height: '100vh', /* Ensure the gradient covers the entire viewport */
        display: 'flex', /* Enable flexbox for centering content */
        justifyContent: 'center', /* Center content horizontally */
        alignItems: 'center', /* Center content vertically */
      }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={< Register/>} />
          <Route path="/display-image" element={<DisplayImagePage />} />
          <Route path="/copy-url" element={<CopyUrlPage />} />
          <Route path="/product-recommendation" element={<ProductRecommendationPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/openimagepage' element={<OpenImagePage />} />

          <Route path="/design" element={<DesignPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
