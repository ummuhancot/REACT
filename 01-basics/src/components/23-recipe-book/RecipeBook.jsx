import React, { useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";

export const RecipeBook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <SearchBox searchHandler={setSearchTerm} />
      <SearchResults searchTerm={searchTerm} />
    </div>
  );
};
