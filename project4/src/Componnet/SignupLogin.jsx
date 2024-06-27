import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SignupLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passToggle, setPassToggle] = useState(false);
  const [validation, setValidation] = useState({ email: false, password: false });
  const [data, setData] = useState({ username: "", email: "", password: "", password2: "" });
  const [logindata, setLoginData] = useState({ email: "", password: "" });
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (data.password === data.password2) {
      setArr([...arr, data]);
      setIsLogin(false);
      Swal.fire({
        icon: 'success',
        title: 'Signup successful',
        text: 'You can now log in with your credentials',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      });
    }
  };

  const handleLoginChange = (e) => {
    let { name, value } = e.target;
    setLoginData({ ...logindata, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userExists = arr.filter((el) => el.email === logindata.email && el.password === logindata.password);

    if (userExists.length > 0) {
      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        text: 'Welcome back!',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: 'Invalid email or password',
      });
    }
  };

  const handleBlur = (e) => {
    let { name, value } = e.target;
    let emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email);
    let passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%?&^])[A-Za-z\d@.#$!%?&]{8,15}$/.test(data.password);

    if (name === 'email') {
      setValidation({ ...validation, email: !emailValid });
    }
    if (name === 'password') {
      setValidation({ ...validation, password: !passwordValid });
    }
    if (name === 'password2') {
      setValidation({ ...validation, password2: !passwordValid });
    }
  };

  return (
    <>
      {isLogin ? (
        <div id="login-box">
          <div className="left-box">
            <h1> Sign Up </h1>
            <form onSubmit={handleSignup}>
              <input type="text" name="username" onChange={handleChange} placeholder="Username" />
              
              <input type="text" name="email" onChange={handleChange} placeholder="Email" onBlur={handleBlur} className={validation.email ? "input-error" : ""} required />
              {validation.email && <p style={{ color: "red" }}>Please enter a valid email</p>}

              <div className="password-container">
                <input type={passToggle ? 'text' : "password"} name="password" onChange={handleChange} placeholder="Password" onBlur={handleBlur} className={validation.password ? "input-error" : ""} required />
                <i onClick={() => setPassToggle(!passToggle)} className={`fas ${passToggle ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </div>
              {validation.password && <p style={{ color: "red" }}>Please enter a valid password</p>}

              <div className="password-container">
                <input type={passToggle ? 'text' : "password"} name="password2" onChange={handleChange} placeholder="Retype Password" onBlur={handleBlur} className={validation.password2 ? "input-error" : ""} />
                <i onClick={() => setPassToggle(!passToggle)} className={`fas ${passToggle ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </div>
              {validation.password2 && <p style={{ color: "red" }}>Please enter a valid password</p>}

              <input type="submit" name="signup-button" placeholder="Sign Up" value="Sign Up"/>
              <div className="or"></div>
              <span onClick={() => setIsLogin(false)}>Already Have an Account? Login</span>
            </form>
          </div>
        </div>
      ) : (
        <div id="login-box">
          <div className="left-box">
            <h1> Login </h1>
            <form onSubmit={handleLogin}>
              <input type="text" name="email" placeholder="Email" value={logindata.email} onChange={handleLoginChange} required />
              <div className="password-container">
                <input type={passToggle ? 'text' : "password"} name="password" value={logindata.password} placeholder="Password" onChange={handleLoginChange} required />
                <i onClick={() => setPassToggle(!passToggle)} className={`fas ${passToggle ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </div>
              <input type="submit" name="signup-button" placeholder="Sign Up" value="Login"/>
              <div className="or"></div>
              <span onClick={() => setIsLogin(true)}>New Here?...Signup</span>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupLogin;
