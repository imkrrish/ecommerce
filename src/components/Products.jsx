import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../store/productsSlice";
import { setProduct } from "../store/productsSlice";
import { STATUSES } from "../store/productsSlice";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  const handler = (product) => {
    dispatch(setProduct(product));
    navigate("/product");
  };
  return (
    <>
      <section id="collection" className="py-5">
        <div className="container text-centre">
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">New Collection</h2>
          </div>

          <div className="row g-0">
            <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
              <button
                type="button"
                className="btn m-2 text-dark active-filter-btn"
              >
                All
              </button>
              <button type="button" className="btn m-2 text-dark">
                Best Sellers
              </button>
              <button type="button" className="btn m-2 text-dark">
                Featured
              </button>
              <button type="button" className="btn m-2 text-dark">
                New Arrival
              </button>
            </div>

            <div className="collection-list mt-4 row gx-0 gy-3">
              {products.map((product) => (
                <div
                  className="col-md-6 col-lg-4 col-xl-3 p-2"
                  key={product.id}
                >
                  <div
                    className="card"
                    role="button"
                    onClick={() => {
                      handler(product);
                    }}
                  >
                    <div className="special-img d-flex flex-wrap justify-content-center position-relative overflow-hidden mt-2">
                      <img src={product.image} className="img" />
                    </div>
                    <div class="text-center">
                      <p className="text-capitalize mt-3 mb-1">
                        {product.title}
                      </p>
                      <span className="fw-bold d-block">${product.price}</span>
                      <a href="#" className="btn btn-primary mt-3 mb-3">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
