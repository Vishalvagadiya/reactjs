import React from 'react';

const Api = ({ data }) => {
  if (data.length === 0) {
    return <div>Opss... No Results Found...</div>;
  }

  return (
    <div className="container-fluid mt-5 d-flex flex-wrap gap-3">
      {data.map((product, index) => (
        <div key={index} className="card mb-4">
          <img src={product.Poster} alt={product.Title} className="img-fluid" />
          <div className="overlay">
            <h5>{product.Title}</h5>
            <p>Year: {product.Year}</p>
            <p>Type: {product.Type}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Api;
