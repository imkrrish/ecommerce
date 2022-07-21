import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
        <div className="container">
          <NavLink
            className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
            to="/"
          >
            <img src="images/shopping-bag-icon.png" alt="site icon" />
            <span className="text-uppercase fw-lighter ms-2">Shopify</span>
          </NavLink>

          <div className="order-lg-2 nav-btns">
            <button type="button" className="btn position-relative">
              <i className="fa fa-shopping-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                5
              </span>
            </button>
            <button type="button" className="btn position-relative">
              <i className="fa fa-heart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                2
              </span>
            </button>
            <button type="button" className="btn position-relative">
              <i className="fa fa-search"></i>
            </button>
          </div>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item px-2 py-2">
                <NavLink className="nav-link text-uppercase text-dark" to="/">
                  home
                </NavLink>
              </li>
              <li className="nav-item px-2 py-2">
                <NavLink
                  className="nav-link text-uppercase text-dark"
                  to="#collection"
                >
                  collection
                </NavLink>
              </li>
              <li className="nav-item px-2 py-2">
                <NavLink
                  className="nav-link text-uppercase text-dark"
                  to="#special"
                >
                  specials
                </NavLink>
              </li>
              <li className="nav-item px-2 py-2">
                <NavLink className="nav-link text-uppercase text-dark" to="#blogs">
                  blogs
                </NavLink>
              </li>
              <li className="nav-item px-2 py-2">
                <NavLink className="nav-link text-uppercase text-dark" to="#about">
                  about us
                </NavLink>
              </li>
              <li className="nav-item px-2 py-2 border-0">
                <NavLink
                  className="nav-link text-uppercase text-dark"
                  to="#popular"
                >
                  popular
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
