import React from "react";
import { NavLink } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <header
        id="header"
        className="vh-100 carousel slide"
        data-bs-ride="carousel"
        style={{ paddingTop: 104 }}
      >
        <div className="container h-100 d-flex align-items-center carousel-inner">
          <div className="text-center carousel-item active">
            <h2 className="text-capitalize text-white">best collection</h2>
            <h1 className="text-uppercase py-2 fw-bold text-white">
              new arrivals
            </h1>
            <NavLink to="/" className="btn mt-3 text-uppercase">
              shop now
            </NavLink>
          </div>
          <div className="text-center carousel-item">
            <h2 className="text-capitalize text-white">best price & offer</h2>
            <h1 className="text-uppercase py-2 fw-bold text-white">
              new season
            </h1>
            <NavLink to="/" className="btn mt-3 text-uppercase">
              buy now
            </NavLink>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </header>
      <Products />
    </>
  );
};

export default Home;
