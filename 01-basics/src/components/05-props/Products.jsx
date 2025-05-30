import React from "react";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    //props.children icinde gelecek olan bilgiler componentin acilis ve
    //kapanis tagleri arasinda yazilir.
    <div>
      <ProductCard title="iPhone 16 Pro" price="949">
        The iPhone 16 Pro is a smartphone designed and marketed by{" "}
        <b>Apple Inc.</b> It is the successor to the iPhone 15 Pro and was
        announced on September 12, 2023.
      </ProductCard>
    </div>
  );
};
