import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data.slice(0, 5)); 
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="background-overlay"></div>
        <div className="hero-section">
          <div className="extra">
            <h1 className="hero-title">Welcome to Flavoro Foods</h1>
            <p className="hero-subtitle">Discover the Art of Pizza Crafting</p>
            <p className="hero-description">
              At Flavoro Foods, we bring you the finest pizzas made from fresh, quality ingredients. Experience the perfect blend of tradition and innovation in every slice.
            </p>
            <button className="cta-button">Explore Our Menu</button>
          </div>
        </div>
      </div>

      <div className="side-section">
        <div style={{ width: "80%", padding: "20px" }}>
          <h2 className="side-title">Why Choose Us?</h2>
          <p className="side-description">
            With years of experience and a passion for pizza, we’re dedicated to providing you with the best dining experience. From our hand-tossed dough to our unique flavor combinations, every detail is crafted with care.
          </p>
          <p className="side-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi culpa quisquam cupiditate dignissimos consequuntur deserunt, nulla, veritatis repellendus et atque velit, quam impedit blanditiis maxime sapiente? Labore iure saepe eligendi!
          </p>
          <p className="side-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi culpa quisquam cupiditate dignissimos consequuntur deserunt, nulla, veritatis repellendus et atque velit, quam impedit blanditiis maxime sapiente? Labore iure saepe eligendi!
          </p>
          <button className="side-button"><Link to="/about">Learn More</Link></button>
        </div>
        <div><img src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/09/cach-nuong-pizza-thumbnail.jpg" alt="" /></div>
      </div>

      <div className="product-preview">
        <h2 className="product-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name.slice(0, 16)}...</h3>
              <p className="product-price">₹{product.price}</p>
              <p className="product-description">{product.desc.slice(0, 50)}...</p>
              <button className="cta-button">
                <Link to={`/product`}>View Details</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
