import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Components/Footer';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3020/products')
      .then((response) => response.json())
      .then((data) => {
        const shuffledData = data.sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledData.slice(0, 10);
        setProducts(selectedProducts);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      <Slider {...sliderSettings} className="slider-container">
        <div className="slider-item">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/011/871/820/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="Slider Image 1" />
        </div>
        <div className="slider-item">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="Slider Image 2" />
        </div>
        <div className="slider-item">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/004/299/815/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="Slider Image 3" />
        </div>
      </Slider>

      <section className="product-list">
        <center><h2>Featured Products</h2></center>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.title}</h3>
              <Link to={`/product/${product.id}`} className="link-button">View Details</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="more-button">
        <center><Link to="/product" className="cta-button">Explore More Products</Link></center>
      </section>

<Footer/>
    </div>
  );
};

export default Home;
