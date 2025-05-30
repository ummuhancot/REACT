import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProductList } from "./ProductList";

export const Shop = () => {
  return (
    <div>
      <Header/>
      <ProductList/>
      <Footer/>
    </div>
  );
};
