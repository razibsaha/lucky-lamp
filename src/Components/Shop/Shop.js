import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = ({ setRandomItem }) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const chooseAgain = () => {
    setCart([]);
  };

  return (
    <div>
      <h1>Choose your lamps</h1>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              handleAddToCart={handleAddToCart}
              product={product}
              key={product.id}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <h2>Order Summary</h2>
          <Cart chooseAgain={chooseAgain} cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
