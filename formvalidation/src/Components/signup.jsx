import React, { useState } from 'react';

const SignupForm = () => {
  const [data, setData] = useState({ name: '', email: '', pass: '' });
  const [arr, setArr] = useState([]);
  const [state, setState] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (pass) => {
    return pass.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'email' && !validateEmail(value)) {
      error = 'Invalid email format';
    } else if (name === 'pass' && !validatePassword(value)) {
      error = 'Password must be at least 6 characters';
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validateEmail(data.email) && validatePassword(data.pass)) {
      setArr([...arr, data]);
      setData({ name: '', email: '', pass: '' });
      setErrors({});
    } else {
      alert('Please fix the errors before submitting');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleClick} className="form-container">
        <h2>Login</h2>
        <div className="input-field">
          <input
            type="text"
            required
            value={data.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>Enter your UserName</label>
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="input-field">
          <input
            type="email"
            required
            value={data.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>Enter your Email</label>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input-field password-field">
          <input
            type={state ? 'text' : 'password'}
            required
            value={data.pass}
            name="pass"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>Enter your password</label>
          <button
            className="material-icons password-icon"
            onClick={() => setState(!state)}
          >
            {state ? 'visibility' : 'visibility_off'}
          </button>
          {errors.pass && <span className="error">{errors.pass}</span>}
        </div>
        <div className="forget">
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
