import React from 'react';

const Error = () => {
  return (
    <div className="error-container">
      <img src="https://static.vecteezy.com/system/resources/previews/021/570/600/original/website-error-screen-free-png.png" alt="Error" className="error-image" width={"50%"}/>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a className="error-button">Go Home</a>
    </div>
  );
};


export default Error;
