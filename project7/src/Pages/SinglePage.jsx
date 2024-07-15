import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../Components/Footer';

function SinglePage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // Mock API call for reviews
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setReviews(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // Fetch related products
    fetch('http://localhost:3020/products')
      .then((res) => res.json())
      .then((res) => {
        const shuffledData = res.sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledData.slice(0, 5);
        setRelatedProducts(selectedProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
    <div className="products-container">
      <div className="products-card">
        <img src={product.image} alt={product.title} className="products-image" />
        <div className="products-details">
          <h2 className="products-title">{product.title}</h2>
          <p className="products-description">{product.description}</p>
          <p className="products-price">Price : ${product.price}</p>
        </div>
      </div>
      <div className="reviews-section">
        <h3>Customer Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h4>{review.name}</h4>
              <p>{review.body}</p>
            </div>
          ))
        ) : (
          <p>No reviews available for this product.</p>
        )}
      </div>
      <div className="related-products-section">
        <h3>Related Products</h3>
        <div className="related-products">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="related-product-card">
              <img src={relatedProduct.image} alt={relatedProduct.title} className="related-product-image" />
              <h4 className="related-product-title">{relatedProduct.title}</h4>
              <Link to={`/product/${relatedProduct.id}`} className="related-product-link">View Details</Link>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SinglePage;
