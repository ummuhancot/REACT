import React from "react";
import { FormControl } from "react-bootstrap";
import "./SearchBox.scss";
export const SearchBox = (props) => {
  return (
    <div className="search-box">
      <h1>Turkish Cuisine</h1>
      <FormControl
        type="search"
        placeholder="Search for Recipes"
        aria-label="Search"
        onChange={(e) => props.searchHandler(e.target.value)}
      />
    </div>
  );
};
