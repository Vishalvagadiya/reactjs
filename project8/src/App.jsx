import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import success from './pages/Success';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import PrivateRoute from './components/PrivateRoute';
import Success from './pages/Success';
import Footer from './pages/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/product" 
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          } 
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/success" element={<Success/>}/>
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
