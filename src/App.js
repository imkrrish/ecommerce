import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
