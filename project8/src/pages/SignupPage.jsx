import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post('http://localhost:5000/users', { email, password });
      setSuccess('Signup successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      setError('Signup failed. Please try again.');
      console.error('Signup failed', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Signup</h1>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="signup-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="signup-input"
          />
          <button
            type="submit"
            className="signup-button"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
