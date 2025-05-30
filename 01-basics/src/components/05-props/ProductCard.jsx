import React from "react";
import "./ProductCard.scss";

export const ProductCard = (props) => {
  return (
    <div className="product-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <h5>{props.price}</h5>
    </div>
  );
};
