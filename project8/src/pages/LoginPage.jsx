import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.get('http://localhost:5000/users');
      const user = response.data.find((user) => user.email === email && user.password === password);

      if (user) {
        dispatch(login(user));
        localStorage.setItem('login', 'true'); // Store login status
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/product'); // Redirect to product page after login
        }, 2000);
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input"
          />
          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
