import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import Footer from '../Components/Footer';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  });
  const [signUpState, setSignUpState] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginState({ ...loginState, [name]: value });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpState({ ...signUpState, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3020/users?email=${loginState.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0 && data[0].password === loginState.password) {
          localStorage.setItem('login', 'true');
          navigate('/product');
        } else {
          alert('Invalid Password');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error logging in');
      });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3020/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signUpState)
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/login");
      }).catch((err) => {
        console.log(err);
      });
    setSignUpState({
      username: "",
      email: "",
      password: ""
    });
  };

  return (
    <div>
    <div className="login-container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="login-form">
            <input type="email" name="email" value={loginState.email} placeholder="Email" onChange={handleLoginChange} required />
            <input type="password" name="password" value={loginState.password} placeholder="Password" onChange={handleLoginChange} required />
            <button type="submit" className="btn">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSignUpSubmit} className="signup-form">
            <input type="text" value={signUpState.username} name='username' placeholder='Username' onChange={handleSignUpChange} required />
            <input type="email" name='email' value={signUpState.email} placeholder='Email Id' onChange={handleSignUpChange} required />
            <input type="password" name='password' value={signUpState.password} placeholder='Password' onChange={handleSignUpChange} required />
            <button type="submit" className="btn">Sign Up</button>
          </form>
        )}
        <button onClick={() => setIsLogin(!isLogin)} className="switch-btn">
          {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
