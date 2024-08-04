import React from 'react';
import FoodItems from '../components/FoodItems';
import CategoryMenu from '../components/CategoryMenu';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';

const Product = () => {
  const isLoggedIn = !!localStorage.getItem('login'); // Check login status

  if (!isLoggedIn) {
    return <p>Please log in to view products.</p>;
  }

  return (
    <div>
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </div>
  );
};

export default Product;
