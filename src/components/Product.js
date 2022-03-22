import React, { useState } from "react";
import "../App.css";
const Product = ({ productList }) => {
  const [products, setProducts] = useState(productList);

  const RemoveItem = (e) => {
    const nameOfItem = e.target.getAttribute("title");
    setProducts(products.filter((item) => item.title !== nameOfItem));
  };

  const renderItem = products.map((product, index) => {
    return (
      <div className="square">
        Item: {product.title}
        <br />
        Brand: {product.brand}
        <br />
        Units: {product.units}
        <br />
        Quantity: {product.quantity}
        <br />
        {product.isPurchased}
        <br />
        <button className="delete" title={product.title} onClick={RemoveItem}>
          remove
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>Whole Foods Market</h1>
      <div className="flex">{renderItem}</div>
    </div>
  );
};

export default Product;
