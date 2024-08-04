import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p>Sorry, the page you're looking for does not exist.</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Error;
