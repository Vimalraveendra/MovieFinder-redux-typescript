import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search movies here"
        onChange={(e) => searchChange(e)}
      />
    </div>
  );
};

export default SearchBox;
