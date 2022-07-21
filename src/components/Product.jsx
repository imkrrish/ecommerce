import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const { productDetails: product } = useSelector((state) => state.product);
  return (
    <>
      <div className="container mt-5 row" style={{ paddingTop: 104 }}>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h5 className="text-uppercase text-black-50">{product.category}</h5>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn m-2 text-dark">Add to Cart</button>
          <button className="btn m-2 text-dark active-filter-btn">
            Go to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
