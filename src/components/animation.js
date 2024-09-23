import React from 'react';
import HomePage from './home';
import OpenImagePage from './OpenImagePage';
import DisplayImagePage from './DisplayImagePage';
import CopyUrlPage from './CopyUrlPage';
import ProductRecommendationPage from './ProductRecommendationpage';
import CheckoutPage from './CheckoutPage';

class Animations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
    this.pages = [
      <HomePage />,
      <OpenImagePage />,
      <DisplayImagePage />,
      <CopyUrlPage />,
      <ProductRecommendationPage />,
      <CheckoutPage />,
    ];
  }

  componentDidMount() {
    this.carouselInterval = setInterval(this.nextPage, 3000); // Change page every 3 seconds
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  nextPage = () => {
    this.setState((prevState) => ({
      currentPage: (prevState.currentPage + 1) % this.pages.length,
    }));
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div className="animation">
        {this.pages.map((page, index) => (
          <div key={index} className={`step${index + 1} ${index === currentPage ? 'active' : ''}`}>
            {page}
          </div>
        ))}
      </div>
    );
  }
}

export default Animations;
